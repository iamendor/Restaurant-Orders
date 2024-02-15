import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import {
  Category,
  CreateCategory,
  UpdateCategory,
  WhereCategory,
} from "../../../models/resources/category.model";
import { Success } from "../../../models/resources/success.model";
import { VerifyResource } from "../../../interfaces/verify.interface";
import { SUCCESS } from "../../../response";

@Injectable()
export class CategoryService {
  private MAX_LEVEL = 3;

  constructor(private readonly prismaService: PrismaMainService) {}

  async create(data: CreateCategory): Promise<Category> {
    const { restaurantId, parentId, level, ...rest } = data;
    const category = await this.prismaService.category.create({
      data: {
        ...rest,
        restaurant: {
          connect: {
            id: restaurantId,
          },
        },
        parent: parentId && {
          connect: { id: parentId },
        },
        root: !parentId,
        level: !parentId ? 1 : level,
      },
    });
    return category;
  }

  async createMany(data: Required<CreateCategory>[]): Promise<Success> {
    const mapped = data.map((cat) => ({ ...cat, root: !cat.parentId }));
    await this.prismaService.category.createMany({
      data: mapped,
      skipDuplicates: true,
    });
    return SUCCESS;
  }

  async update(data: UpdateCategory): Promise<Category> {
    const { update, where } = data;
    const updated = await this.prismaService.category.update({
      where: {
        id: where.id,
      },
      data: {
        ...update,
      },
    });
    return updated;
  }

  async delete(where: WhereCategory): Promise<Success> {
    await this.prismaService.category.delete({
      where: {
        id: where.id,
      },
    });
    return SUCCESS;
  }

  async find(where: WhereCategory): Promise<Category> {
    const category = await this.prismaService.category.findUniqueOrThrow({
      where: {
        id: where.id,
      },
    });
    return category;
  }
  async list(restaurantId: number): Promise<Category[]> {
    const categories = await this.prismaService.category.findMany({
      where: {
        restaurantId,
      },
    });
    return categories;
  }

  async validate({ restaurantId, id }: VerifyResource) {
    const category = await this.find({ id });
    return category.restaurantId == restaurantId;
  }

  async validateNesting(parentId: number) {
    const category = await this.find({ id: parentId });
    return category.level < this.MAX_LEVEL ? category.level : false;
  }

  async validateUnique({ restaurantId, name }) {
    const categoryNames = (await this.list(restaurantId)).map(
      (cat) => cat.name
    );
    return !categoryNames.includes(name);
  }
}
