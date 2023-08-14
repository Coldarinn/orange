export type TSorts = 'price_asc' | 'price_desc' | 'stars' | 'popularity_asc' | 'popularity_desc' | 'discount' | 'newest';

// interface IProductGetProducts {
//   category: string | null,
//   manufacturers: string[] | null,
//   min_price: number | null,
//   max_price: number | null,
//   sort: TSorts | null,
//   show: boolean | null,
//   limit: number | null,
//   offset: number | null,
//   like: boolean | null
// }

const EndpointNames = {
  // User
  // Basket
  BASKET_ADD_PRODUCT: '/basket/product',
  BASKET_INC_COUNT: '/basket/incr',
  BASKET_DEC_COUNT: '/basket/decr',
  BASKET_CLEAR: '/basket/clear',
  BASKET_GET: '/basket',
  // /Basket

  // Order
  ORDER_CREATE: '/order',
  ORDER_ATTACH_PRODUCT: (internal_id: string | number) => `/order/${internal_id}/attach`,
  ORDER_DETACH_PRODUCT: (internal_id: string | number) => `/order/${internal_id}/detach`,
  ORDER_UPDATE_COUNT: (internal_id: string | number) => `/order/${internal_id}/count`,
  ORDER_GET_ORDERS: (limit: number, offset: number, status?: string) => `/order?limit=${limit}&offset=${offset}&status=${status}`,
  ORDER_GET: (internal_id: string | number) => `/order/${internal_id}`,
  ORDER_GET_PRODUCTS: (internal_id: string | number, limit: number, offset: number) => `/order/${internal_id}/products?limit=${limit}&offset=${offset}`,
  // /Order

  // Product
  PRODUCT_GET_CATEGORIES: '/product/category',
  PRODUCT_GET_MANUFACTURES: '/product/manufacturer',
  PRODUCT_GET_SEXES: '/product/sex',
  PRODUCT_GET_COUNTRIES: '/product/country',
  // PRODUCT_GET_PRODUCTS: (params: IProductGetProducts) => `/product
  //                                                         ?category=${params.category}
  //                                                         &manufacturers=${params.manufacturers}
  //                                                         &min_price=${params.min_price}
  //                                                         &max_price=${params.max_price}
  //                                                         &sort=${params.sort}
  //                                                         &show=${params.show}
  //                                                         &limit=${params.limit}
  //                                                         &offset=${params.offset}
  //                                                         &like=${params.like}`,
  PRODUCT_GET: (internal_id: string | number) => `/product/${internal_id}`,
  PRODUCT_LIKE: (internal_id: string | number) => `/product/${internal_id}/like`,
  PRODUCT_UNLIKE: (internal_id: string | number) => `/product/${internal_id}/unlike`,
  PRODUCT_RECENTLY_VIEWED: (limit: string | number) => `/product/recently?limit=${limit}`,

  // /Product

  // Feedbacks
  FEEDBACK: '/feedback',
  FEEDBACKS_GET: (product_id: string, limit: number, offset: number, only_my?: boolean) => `/feedback?product_id=${product_id}&limit=${limit}&offset=${offset}&only_my=${only_my}`,
  FEEDBACK_LIKE: (internal_id: string | number) => `/feedback/${internal_id}/like`,
  FEEDBACK_UNLIKE: (internal_id: string | number) => `/feedback/${internal_id}/unlike`,
  // /Feedbacks
  // /User

  // Admin
  // Order
  ADMIN_ORDER_PENDING: (internal_id: string | number) => `/order/${internal_id}/pending`,
  ADMIN_ORDER_SEND: (internal_id: string | number) => `/order/${internal_id}/send`,
  ADMIN_ORDER_DELIVERY: (internal_id: string | number) => `/order/${internal_id}/delivery`,
  ADMIN_ORDER_COMPLETE: (internal_id: string | number) => `/order/${internal_id}/complete`,
  ADMIN_ORDER_CANCEL: (internal_id: string | number) => `/order/${internal_id}/cancel`,
  // /Order

  // Product
  ADMIN_PRODUCT_CREATE: '/product',
  ADMIN_PRODUCT_CREATE_MANUFACTURE: '/product/manufacturer',
  ADMIN_PRODUCT_CREATE_CATEGORY: '/product/category',
  ADMIN_PRODUCT_SHOW: (internal_id: string | number) => `/product/${internal_id}/show`,
  ADMIN_PRODUCT_HIDE: (internal_id: string | number) => `/product/${internal_id}/hide`,
  ADMIN_PRODUCT_UPDATE_COUNT: (internal_id: string | number) => `/product/${internal_id}/count`,
  // /Product

  // /Admin

  // Auth
  SIGN_IN: '/sign_in',
  SIGN_UP: '/sign_up',
  SIGN_OUT: '/sign_out',
  REFRESH: '/refresh',
  CHANGE_PASSWORD: '/password',
  USER_INFO: '/user/info',
  // /Auth
};

export default EndpointNames;
