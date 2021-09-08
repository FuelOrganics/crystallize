module.exports = {
  translation: {
    common: {
      price: "{{value, currency}}",
      tax: "TAX: {{value, currency}}",
      close: "Close",
      related: "Related",
    },
    frontpage: {
      title: "Home",
    },
    customer: {
      name: "Name",
      firstName: "First name",
      lastName: "Last name",
      streetAddress: "Street address",
      postalCode: "Postal code",
      email: "Email",
      emailPlaceholder: "you@your.place",
      login: {
        title: "Login",
        loggedIn: "You are logged in",
        instructions:
          "Enter your email address and we’ll send a magic login link to your inbox.",
        emailAddressInvalid: "Please enter a valid email address",
        sendMagicLink: "Send me a magic link",
      },
      account: {
        title: "My account",
      },
    },
    product: {
      relatedProduct: "You might also be interested in",
      relatedProduct_plural: "You might also be interested in",
      addToBasket: "Add to Basket",
      noVariants: "This product has no variants",
      buy: "Buy",
      addToBasket: "Add to basket",
      stock: "{{stockCount}} in stock",
      outOfStock: "Out of stock",
      attributes: {
        color: "Color",
        green: "Green",
        blue: "Blue",
        black: "Black",
      },
    },
    basket: {
      title: "Basket",
      loading: "Hold on. Getting your basket...",
      removeItem: "Remove {{name}} from basket",
      empty: "Your basket is empty",
      empty_inCheckout: "You have no items in your basket",
      remainingUntilFreeShipping:
        "Add another {{amount, currency}} to your order for free shipping.",
      totalPrice: "Total price",
      discount: "Discount",
      totalPriceAfterDiscount: "Total after discount",
      shippingPrice: "Shipping",
      tax: "Tax",
      totalToPay: "To pay",
      goToCheckout: "Go to checkout",
    },
    layout: {
      menu: "Menu",
      searchPlaceholder: "Find things",
      ecomBy: "eCommerce by",
      loadingVideo: "Loading video",
      slider: {
        previous: "See the previous item",
        next: "See the next item",
      },
      builtWith: "Built with {{- link}}",
      poweredBy: "Powered by {{- link}}",
      searchPlaceholder: "Search",
    },
    checkout: {
      title: "Checkout",
      payNow: "Pay now",
      choosePaymentMethod: "Choose payment method",
      noPaymentProvidersConfigured: "No payment providers are configured",
      paymentProviderNotConfigured: "Payment provider {{name}} is not configured",
      paymentProviderLogoAlt: "Logo for {{name}}",
      loadingPaymentGateway: "Initialising payment gateway...",
      loadingPaymentGatewayFailed: "Oh no. Could not load the {{name}} payment gateway",
      confirmation: {
        title: "Order confirmation",
        shortStatus: "Your order has been confirmed."
      }
    },
    search: {
      label: "Search",
      foundResults: "Found {{count}} matching result",
      foundResults_plural: "Found {{count}} matching results",
      orderTitle: "Order by",
      order: {
        ITEM_NAME_ASC: "Name ascending",
        ITEM_NAME_DESC: "Name descending",
        PRICE_ASC: "Price ascending",
        PRICE_DESC: "Price descending",
        STOCK_ASC: "Stock ascending",
        STOCK_DESC: "Stock descending",
      },
      filterResults: "Filter results",
      filter: "Filter",
      facets: {
        viewNResults: "Show {{count}} result",
        viewNResults_plural: "Show {{count}} results",
        price: {
          title: "Price",
          min: "Minimum price",
          max: "Maximum price",
        },
      },
    },
  },
}
