export class JwtPayload {
  name: string;
  sub: number;
  role: string;
  id: number;
  restaurantId?: number;
}
