/**
 * Global enums
 */
export default {
  PROJECT_ID: 20307941988, // @TODO: replace with your own project ID
  EXPERIMENT_KEYS: {
    FULLSTACK_TEST: 'fullstack_test',
    CHECKOUT_FLOW_EXPERIMENT: 'checkout_flow_experiment',
  },
  VARIATION_KEYS: {
    SORT_BY_PRICE: 'sort_by_price',
    SORT_BY_NAME: 'sort_by_name',
    TWO_STEP_CHECKOUT: 'two_step_checkout',
    ONE_STEP_CHECKOUT: 'one_step_checkout',
    ABOVE_TITLE_ORIGINAL: 'above_title_original',
    ABOVE_TITLE_VARIATION: 'above_title_variation'
  },
  EVENT_KEYS: {
    ADD_TO_CART: 'add_to_cart',
    CHECKOUT_COMPLETE: 'checkout_complete',
  },
  ROUTES: {
    HOME: 'home',
    CHECKOUT: 'checkout',
  },
  COOKIE_KEYS: {
    USER: 'item_shop_user',
  },
}
