export const extractRIdFromContext = (ctx) => ctx.getContext().req.restaurantId;

export const getGqlFunction = (ctx) => ctx.getInfo().path.key;

export const getReq = (ctx) => ctx.getContext().req;
