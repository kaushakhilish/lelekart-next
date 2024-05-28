
import { pgTable,serial, varchar, text, integer, boolean, timestamp, pgEnum,primaryKey } from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';



//ADDRESS
export const addresses = pgTable('addresses', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  house: text('house').notNull(),
  street: text('street').notNull(),
  landmark: text('landmark'), 
  city: text('city').notNull(),
  state: text('state').notNull(),
  pinCode: text('pin_code').notNull(),
  country: text('country').notNull(),
  createTs: timestamp('create_ts').defaultNow().notNull(),
  updateTs: timestamp('update_ts').defaultNow().notNull()
});


//USER
const userRoles = pgEnum('user_roles', ['buyer', 'admin', 'seller']); // Assuming roles

export const users = pgTable('users', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  name: varchar('name', { length: 255 }).notNull().default('User'),
  email: varchar('email', { length: 255 }).notNull().unique().default(''),
  phoneNumber: varchar('phoneNumber', { length: 255 }).unique().default(''),
  password: varchar('password', { length: 255 }).notNull(),
  role: userRoles('role').default('buyer').notNull(),
  isEmailVerified: boolean('isEmailVerified').default(false).notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});


//VENDOR
const vendorRoles = pgEnum('vendor_roles', ['vendor', 'admin', 'seller']); // Assumed Roles

export const vendors = pgTable('vendors', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: vendorRoles('role').default('vendor').notNull(),
  isEmailVerified: boolean('isEmailVerified').default(false).notNull(),
  phoneNumber: varchar('phoneNumber', { length: 10 }).notNull(),
  companyName: varchar('companyName', { length: 255 }).notNull(),
  businessName: varchar('businessName', { length: 255 }).notNull(),
  displayName: varchar('displayName', { length: 255 }).notNull(),
  pan: varchar('pan', { length: 10 }).notNull(),
  aadhar: varchar('aadhar', { length: 12 }).notNull(),
  gst: varchar('gst', { length: 15 }).notNull(),
  addressId: serial('address_id').references(() => addresses.id),
  accountNumber: varchar('accountNumber', { length: 18 }).notNull(),
  accountHolder: varchar('accountHolder', { length: 255 }),
  bankName: varchar('bankName', { length: 255 }),
  branch: varchar('branch', { length: 255 }),
  ifscCode: varchar('ifscCode', { length: 11 }).notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});


//  CATEGORY TABLE 
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  adminId: integer('admin_id').references(() => users.id), 
  name: varchar('name', { length: 255 }).notNull(),
  images: varchar('images', { length: 255 })
});


// SUBCATEGORY TABLE
export const subCategories = pgTable('sub_categories', {
  id: serial('id').primaryKey(),
  categoryId: integer('category_id').references(() => categories.id),
  name: varchar('name', { length: 255 }).notNull(),
  image: varchar('image', { length: 255 })
});


// CHILD CATEGORY TABLE
export const childCategories = pgTable('child_categories', {
  id: serial('id').primaryKey(),
  subCategoryId: integer('sub_category_id').references(() => subCategories.id),
  name: varchar('name', { length: 255 }).notNull(),
  images: varchar('images', { length: 255 })
});


//PRODUCT
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  vendorId: integer('vendor_id').references(() => vendors.id), 
  name: varchar('name', { length: 255 }).notNull(),
  sku: varchar('sku', { length: 255 }).notNull(),
  images: text('images').array().notNull().default(sql`ARRAY[]::text[]`), 
  categoryId: integer('category_id').references(() => categories.id),
  subCategoryId: integer('sub_category_id').references(() => subCategories.id),
  childCategoryId: integer('child_category_id').references(() => childCategories.id),
  stock: integer('stock').notNull(),
  description: text('description').notNull(),
  price: integer('price').notNull(),
  discountedPrice: integer('discounted_price'),
  videoUrl: varchar('video_url', { length: 255 }),
  tags: text('tags').array().notNull().default(sql`ARRAY[]::text[]`), 
  currentColor: varchar('current_color', { length: 255 }),
  condition: varchar('condition', { length: 255 }),
  preOrder: varchar('pre_order', { length: 255 }),
  minOrderQty: integer('min_order_qty'),
  estShippingTime: timestamp('est_shipping_time'),
  sizes: text('sizes').array().notNull().default(sql`ARRAY[]::text[]`),
  productMeasurement: varchar('product_measurement', { length: 255 }),
  allowWholesale: boolean('allow_wholesale').default(false).notNull(),
  isVerified: boolean('is_verified').default(false).notNull(),
  isApproved: boolean('is_approved').default(false).notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});

export const productColors = pgTable('product_colors', {
  productId: integer('product_id').references(() => products.id).notNull(),
  colorProductId: integer('color_product_id').references(() => products.id).notNull(),
}, (table) => ({
  pk: primaryKey({ name: 'product_colors_pk', columns: [table.productId, table.colorProductId] })
}));

// PRODUCT RELATION
export const productsRelations = relations(products, ({ many }) => ({
  otherColors: many(products)
}));


export const productColorsRelations = relations(productColors, ({ one }) => ({
  product: one(products, {
    fields: [productColors.productId],
    references: [products.id]
  }),
  colorProduct: one(products, {
    fields: [productColors.colorProductId],
    references: [products.id]
  })
}));




// CART
export const carts = pgTable('carts', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});

// CART PRODUCT
export const cartProducts = pgTable('cart_products', {
  id: serial('id').primaryKey(),
  cartId: integer('cart_id').references(() => carts.id),
  productId: integer('product_id').references(() => products.id),
  quantity: integer('quantity').notNull()
});



//REVIEW 
export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  user: integer('user_id').references(() => users.id).notNull(), 
  product: integer('product_id').references(() => products.id).notNull(), 
  rating: integer('rating').notNull(),
  title: varchar('title', { length: 100 }),
  description: varchar('description', { length: 500 }),
  images: text('images').array().default(sql`ARRAY[]::text[]`),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});


//REVIEW RELATIONS
export const reviewsRelations = relations(reviews, ({ one }) => ({
  user: one(users, {
    fields: [reviews.user],
    references: [users.id],
  }),
  product: one(products, {
    fields: [reviews.product],
    references: [products.id],
  }),
}));


//WISHLISTS

export const wishlists = pgTable('wishlists', {
  id: serial('id').primaryKey(),
  user: integer('user_id').references(() => users.id).notNull(), 
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});

export const wishlistItems = pgTable('wishlist_items', {
  id: serial('id').primaryKey(),
  wishlistId: integer('wishlist_id').references(() => wishlists.id).notNull(), 
  productId: integer('product_id').references(() => products.id).notNull() 
});

export const wishlistsRelations = relations(wishlists, ({ many }) => ({
  items: many(wishlistItems),
}));

export const wishlistItemsRelations = relations(wishlistItems, ({ one }) => ({
  wishlist: one(wishlists, {
    fields: [wishlistItems.wishlistId],
    references: [wishlists.id],
  }),
  product: one(products, {
    fields: [wishlistItems.productId],
    references: [products.id],
  }),
}));


//ORDER 

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  user: integer('user_id').references(() => users.id).notNull(), 
  shippingAddress: integer('shipping_address_id').references(() => addresses.id).notNull(), 
  totalAmount: integer('total_amount').notNull(),
  paymentMethod: varchar('payment_method', { length: 50 }).notNull().default('COD'),
  paymentStatus: varchar('payment_status', { length: 50 }),
  createdPaymentOrderId: varchar('created_payment_order_id', { length: 255 }),
  razorPayPaymentId: varchar('razorpay_payment_id', { length: 255 }),
  razorPayOrderId: varchar('razorpay_order_id', { length: 255 }),
  razorPaySignature: varchar('razorpay_signature', { length: 255 }),
  trackingId: varchar('tracking_id', { length: 255 }),
  orderStatus: varchar('order_status', { length: 50 }).notNull().default('Pending'),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});


//ORDER ITEMS
export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id').references(() => orders.id).notNull(),
  productId: integer('product_id').references(() => products.id).notNull(), 
  quantity: integer('quantity').notNull(),
  status: varchar('status', { length: 50 }).notNull().default('Pending'),
  vendorPayableAmount: integer('vendor_payable_amount'),
  vendorPaymentStatus: varchar('vendor_payment_status', { length: 50 }).notNull().default('Unpaid'),
  invoiceUrl: varchar('invoice_url', { length: 255 })
});


//ORDER RELATIONS
export const ordersRelations = relations(orders, ({ many }) => ({
  items: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
  product: one(products, {
    fields: [orderItems.productId],
    references: [products.id],
  }),
}));


//ADMIN

export const admins = pgTable('admins', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).default('admin'),
  isEmailVerified: boolean('is_email_verified').default(false).notNull(),
});

// AGENT

export const agents = pgTable('agents', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 10 }).notNull(),
  role: varchar('role', { length: 50 }).default('agent'),
  isEmailVerified: boolean('is_email_verified').default(false).notNull(),
  isApproved: boolean('is_approved').default(false).notNull(),
  approvedBy: integer('approved_by').references(() => admins.id), 
  salesMade: integer('sales_made').default(0).notNull(),
  rewards: integer('rewards').default(0).notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});

//COUPON

export const coupons = pgTable('coupons', {
  id: serial('id').primaryKey(),
  code: varchar('code', { length: 50 }).notNull(),
  discount: integer('discount').notNull(),
  expiryDate: timestamp('expiry_date').notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});


export const agentCoupons = pgTable('agent_coupons', {
  id: serial('id').primaryKey(),
  agentId: integer('agent_id').references(() => agents.id).notNull(), 
  couponId: integer('coupon_id').references(() => coupons.id).notNull(), 
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});



// AGENT COUPON RELATIONS
export const agentsRelations = relations(agents, ({ many }) => ({
  couponsAllotted: many(agentCoupons),
}));

export const couponsRelations = relations(coupons, ({ many }) => ({
  agents: many(agentCoupons),
}));

export const agentCouponsRelations = relations(agentCoupons, ({ one }) => ({
  agent: one(agents, {
    fields: [agentCoupons.agentId],
    references: [agents.id],
  }),
  coupon: one(coupons, {
    fields: [agentCoupons.couponId],
    references: [coupons.id],
  }),
}));

//MARKETING AGENT

export const marketingAgents = pgTable('marketing_agents', {
  id: serial('id').primaryKey(),
  adminId: integer('admin_id').references(() => admins.id), 
  userId: integer('user_id').references(() => vendors.id).unique().notNull(), 
  isApproved: boolean('is_approved').default(false).notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});

export const marketingAgentCoupons = pgTable('marketing_agent_coupons', {
  id: serial('id').primaryKey(),
  marketingAgentId: integer('marketing_agent_id').references(() => marketingAgents.id).notNull(), 
  couponId: integer('coupon_id').references(() => coupons.id).notNull(), 
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});



//MARKETING AGENT COUPON RELATIONS
export const marketingAgentsRelations = relations(marketingAgents, ({ many }) => ({
  coupons: many(marketingAgentCoupons),
}));

export const marketingAgentCouponsRelations = relations(marketingAgentCoupons, ({ one }) => ({
  marketingAgent: one(marketingAgents, {
    fields: [marketingAgentCoupons.marketingAgentId],
    references: [marketingAgents.id],
  }),
  coupon: one(coupons, {
    fields: [marketingAgentCoupons.couponId],
    references: [coupons.id],
  }),
}));
 
//TOKEN  -- OPTIONAL 

export const tokens = pgTable('tokens', {
  id: serial('id').primaryKey(),
  token: text('token').notNull().unique(),
  userId: integer('user_id').notNull(), 
  userModel: varchar('user_model', { length: 50 }).notNull(),
  type: varchar('type', { length: 50 }).notNull(), 
  expires: timestamp('expires').notNull(),
  blacklisted: boolean('blacklisted').default(false).notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull()
});














