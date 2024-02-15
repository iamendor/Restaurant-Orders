import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { ProductService } from "../services/product.service";
import { User } from "../../../auth/decorators/user.decorator";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { RESTAURANT, WAITER } from "../../../role";
import { CategoryService } from "../../category/services/category.service";
import { IdGuard } from "../../../auth/guard/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import {
  Product,
  CreateProduct,
  UpdateProduct,
  WhereProduct,
} from "../../../models/resources/product.model";
import { Success } from "../../../models/resources/success.model";
import { ProductFilter } from "../../../models/resources/filter.model";
import { ProductGuard } from "../../../guard";
import { GetProduct } from "../../../decorators";
import {
  CREATE_PRODUCT_ACTION,
  TaskInterceptor,
} from "../../../interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../interceptors/cache.interceptor";
import { AddRID } from "../../../pipes/rid.pipe";
import { FilterInterceptor } from "../../../interceptors/filter.interceptor";
import { MinArrayPipe } from "../../../pipes/array.pipe";
import { PermissionDeniedException } from "../../../error";

const ProductCacheInterceptor = CacheInterceptor({
  prefix: "product",
  map: (v) => ({ ...v, createdAt: new Date(v.createdAt) }),
});
const ProductClearCacheInterceptor = ClearCacheInterceptor("product");

@Resolver((of) => Product)
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService
  ) {}

  private;

  @Mutation(() => Product, { name: "createProduct" })
  @UseInterceptors(
    ProductClearCacheInterceptor,
    TaskInterceptor(CREATE_PRODUCT_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(
    @User() { id }: JwtPayload,
    @Args("data", AddRID) data: CreateProduct
  ) {
    const { categoryId } = data;
    const isCatValid = await this.categoryService.validate({
      restaurantId: id,
      id: categoryId,
    });

    if (!isCatValid) throw new PermissionDeniedException();

    const product = await this.productService.create(data);

    return product;
  }

  @Mutation(() => Success, { name: "createProducts" })
  @UseInterceptors(
    ProductClearCacheInterceptor,
    TaskInterceptor(CREATE_PRODUCT_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async createMany(
    @Args("data", { type: () => [CreateProduct] }, MinArrayPipe, AddRID)
    data: CreateProduct[]
  ) {
    const categories = [...new Set(data.map((v) => v.categoryId))];

    for (let i = 0; i < categories.length; i++) {
      const catId = categories[i];
      await this.categoryService.validate({
        id: catId,
        restaurantId: data[i].restaurantId,
      });
    }

    return this.productService.createMany(data);
  }

  @Mutation(() => Product, { name: "updateProduct" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), ProductGuard)
  @UseInterceptors(ProductClearCacheInterceptor)
  update(@Args("data") data: UpdateProduct) {
    return this.productService.update(data);
  }

  @Mutation(() => Success, { name: "deleteProduct" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), ProductGuard)
  @UseInterceptors(ProductClearCacheInterceptor)
  delete(@Args("where") where: WhereProduct) {
    return this.productService.delete(where);
  }

  @Query(() => [Product], { name: "products" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  @UseInterceptors(ProductCacheInterceptor, FilterInterceptor("victuals"))
  list(
    @RID() id: number,
    @Args("filter", { nullable: true, type: () => ProductFilter })
    _filters?: ProductFilter
  ) {
    return this.productService.list(id);
  }

  @Query(() => Product, { name: "product" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), ProductGuard)
  async find(@GetProduct() product: Product, @Args("where") _: WhereProduct) {
    return product;
  }
}
