import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import {
  CreateProductData,
  UpdateProduct,
  WhereProduct,
  Product,
} from "../../../models/resources/product.model";
import { Success } from "../../../models/resources/success.model";
import { VerifyResource } from "../../../interfaces/verify.interface";
import { SUCCESS } from "../../../response";

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaMainService) {}

  async create(data: CreateProductData): Promise<Product> {
    const { restaurantId, categoryId, ...rest } = data;
    const meal = await this.prismaService.product.create({
      data: {
        ...rest,
        restaurant: {
          connect: {
            id: restaurantId,
          },
        },
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
    return meal;
  }

  async createMany(data: CreateProductData[]): Promise<Success> {
    const checked = data.map((d) => {
      const { restaurantId, categoryId, ...rest } = d;
      return {
        ...rest,
        restaurantId,
        categoryId,
      };
    });

    await this.prismaService.product.createMany({
      data: checked,
      skipDuplicates: true,
    });
    return SUCCESS;
  }

  async update(data: UpdateProduct): Promise<Product> {
    const { where, update } = data;
    const updated = await this.prismaService.product.update({
      where: {
        id: where.id,
      },
      data: {
        ...update,
      },
    });
    return updated;
  }

  async delete(where: WhereProduct): Promise<Success> {
    await this.prismaService.product.delete({
      where: {
        id: where.id,
      },
    });
    return SUCCESS;
  }

  async list(restaurantId: number): Promise<Product[]> {
    const products = await this.prismaService.product.findMany({
      where: {
        restaurantId: restaurantId,
      },
    });
    return products;
  }

  async find(where: WhereProduct): Promise<Product> {
    const meal = await this.prismaService.product.findUniqueOrThrow({
      where: {
        id: where.id,
      },
    });
    return meal;
  }

  async validate({ id, restaurantId }: VerifyResource) {
    const product = await this.find({ id });
    return product.restaurantId == restaurantId;
  }
}
