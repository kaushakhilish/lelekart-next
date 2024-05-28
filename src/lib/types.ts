export type Product = {
    id: number;
    vendorId: number;
    name: string;
    sku: string;
    images: string[];
    categoryId?: number;
    subCategoryId?: number;
    childCategoryId?: number;
    stock: number;
    description: string;
    price: number;
    discountedPrice?: number;
    videoUrl?: string;
    tags?: string[];
    currentColor?: string;
    otherColors?: number[];
    condition?: string;
    preOrder?: string;
    minOrderQty?: number;
    estShippingTime?: Date;
    sizes?: string[];
    productMeasurement?: string;
    allowWholesale: boolean;
    isVerified: boolean;
    isApproved: boolean;
    createdAt: Date;
    updatedAt: Date;
  };


