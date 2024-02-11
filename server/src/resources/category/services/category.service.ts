import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import {
  Category,
  CreateCategory,
  UpdateCategory,
  WhereCategory,
} from "../../../models/category.model";
import { Success } from "../../../models/success.model";
import { PermissionDeniedException } from "../../../error";
import { VerifyResource } from "../../../interfaces/verify.interface";

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCategory): Promise<Category> {
    const { restaurantId, parentId, ...rest } = data;
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
    return { message: "success" };
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
    return { message: "success" };
  }

  async find(where: WhereCategory): Promise<Category> {
    const category = await this.prismaService.category.findUniqueOrThrow({
      where: {
        id: where.id,
      },
    });
    return category;
  }
  //TODO: add implementation for max level
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
}
