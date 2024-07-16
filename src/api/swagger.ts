
 
/**
*       customers paths
*/
import customersSave from "./paths/customers/Save";
import customersList from "./paths/customers/List";
import customersListOne from "./paths/customers/ListOne";
import customersUpdate from "./paths/customers/Update";
import customersDelete from "./paths/customers/Delete";


/**
*       addresses paths
*/
import addressesSave from "./paths/addresses/Save";
import addressesList from "./paths/addresses/List";
import addressesListOne from "./paths/addresses/ListOne";
import addressesUpdate from "./paths/addresses/Update";
import addressesDelete from "./paths/addresses/Delete";


/**
*       orders paths
*/
import ordersSave from "./paths/orders/Save";
import ordersList from "./paths/orders/List";
import ordersListOne from "./paths/orders/ListOne";
import ordersUpdate from "./paths/orders/Update";
import ordersDelete from "./paths/orders/Delete";


/**
*       order_items paths
*/
import order_itemsSave from "./paths/order_items/Save";
import order_itemsList from "./paths/order_items/List";
import order_itemsListOne from "./paths/order_items/ListOne";
import order_itemsUpdate from "./paths/order_items/Update";
import order_itemsDelete from "./paths/order_items/Delete";


/**
*       products paths
*/
import productsSave from "./paths/products/Save";
import productsList from "./paths/products/List";
import productsListOne from "./paths/products/ListOne";
import productsUpdate from "./paths/products/Update";
import productsDelete from "./paths/products/Delete";


/**
*       categories paths
*/
import categoriesSave from "./paths/categories/Save";
import categoriesList from "./paths/categories/List";
import categoriesListOne from "./paths/categories/ListOne";
import categoriesUpdate from "./paths/categories/Update";
import categoriesDelete from "./paths/categories/Delete";


/**
*       suppliers paths
*/
import suppliersSave from "./paths/suppliers/Save";
import suppliersList from "./paths/suppliers/List";
import suppliersListOne from "./paths/suppliers/ListOne";
import suppliersUpdate from "./paths/suppliers/Update";
import suppliersDelete from "./paths/suppliers/Delete";


/**
*       shippers paths
*/
import shippersSave from "./paths/shippers/Save";
import shippersList from "./paths/shippers/List";
import shippersListOne from "./paths/shippers/ListOne";
import shippersUpdate from "./paths/shippers/Update";
import shippersDelete from "./paths/shippers/Delete";


/**
*       payments paths
*/
import paymentsSave from "./paths/payments/Save";
import paymentsList from "./paths/payments/List";
import paymentsListOne from "./paths/payments/ListOne";
import paymentsUpdate from "./paths/payments/Update";
import paymentsDelete from "./paths/payments/Delete";


/**
*       reviews paths
*/
import reviewsSave from "./paths/reviews/Save";
import reviewsList from "./paths/reviews/List";
import reviewsListOne from "./paths/reviews/ListOne";
import reviewsUpdate from "./paths/reviews/Update";
import reviewsDelete from "./paths/reviews/Delete";


/**
*       wishlists paths
*/
import wishlistsSave from "./paths/wishlists/Save";
import wishlistsList from "./paths/wishlists/List";
import wishlistsListOne from "./paths/wishlists/ListOne";
import wishlistsUpdate from "./paths/wishlists/Update";
import wishlistsDelete from "./paths/wishlists/Delete";


/**
*       wishlist_items paths
*/
import wishlist_itemsSave from "./paths/wishlist_items/Save";
import wishlist_itemsList from "./paths/wishlist_items/List";
import wishlist_itemsListOne from "./paths/wishlist_items/ListOne";
import wishlist_itemsUpdate from "./paths/wishlist_items/Update";
import wishlist_itemsDelete from "./paths/wishlist_items/Delete";


/**
*       shopping_carts paths
*/
import shopping_cartsSave from "./paths/shopping_carts/Save";
import shopping_cartsList from "./paths/shopping_carts/List";
import shopping_cartsListOne from "./paths/shopping_carts/ListOne";
import shopping_cartsUpdate from "./paths/shopping_carts/Update";
import shopping_cartsDelete from "./paths/shopping_carts/Delete";


/**
*       cart_items paths
*/
import cart_itemsSave from "./paths/cart_items/Save";
import cart_itemsList from "./paths/cart_items/List";
import cart_itemsListOne from "./paths/cart_items/ListOne";
import cart_itemsUpdate from "./paths/cart_items/Update";
import cart_itemsDelete from "./paths/cart_items/Delete";


/**
*       coupons paths
*/
import couponsSave from "./paths/coupons/Save";
import couponsList from "./paths/coupons/List";
import couponsListOne from "./paths/coupons/ListOne";
import couponsUpdate from "./paths/coupons/Update";
import couponsDelete from "./paths/coupons/Delete";


/**
*       inventory paths
*/
import inventorySave from "./paths/inventory/Save";
import inventoryList from "./paths/inventory/List";
import inventoryListOne from "./paths/inventory/ListOne";
import inventoryUpdate from "./paths/inventory/Update";
import inventoryDelete from "./paths/inventory/Delete";


/**
*       employees paths
*/
import employeesSave from "./paths/employees/Save";
import employeesList from "./paths/employees/List";
import employeesListOne from "./paths/employees/ListOne";
import employeesUpdate from "./paths/employees/Update";
import employeesDelete from "./paths/employees/Delete";


/**
*       departments paths
*/
import departmentsSave from "./paths/departments/Save";
import departmentsList from "./paths/departments/List";
import departmentsListOne from "./paths/departments/ListOne";
import departmentsUpdate from "./paths/departments/Update";
import departmentsDelete from "./paths/departments/Delete";


/**
*       roles paths
*/
import rolesSave from "./paths/roles/Save";
import rolesList from "./paths/roles/List";
import rolesListOne from "./paths/roles/ListOne";
import rolesUpdate from "./paths/roles/Update";
import rolesDelete from "./paths/roles/Delete";


/**
*       permissions paths
*/
import permissionsSave from "./paths/permissions/Save";
import permissionsList from "./paths/permissions/List";
import permissionsListOne from "./paths/permissions/ListOne";
import permissionsUpdate from "./paths/permissions/Update";
import permissionsDelete from "./paths/permissions/Delete";

 

  
const apiDoc = {
  swagger: '2.0',
  basePath: '/v1',
  info: {
    title: 'Teste Projeto - API.',
    version: '1.0.0'
  },
  paths: {

    
    /**
    * 
    *        API / v1 / customers
    * 
    */
    // List
    "/customers/list": customersList ,
    // ListOne
    "/customers/list/{customer_id}": customersListOne ,
    // Save
    "/customers/save": customersSave ,
    // Update
    "/customers/update": customersUpdate ,
    // Delete
    "/customers/delete": customersDelete ,   
    /**
    * 
    *        API / v1 / addresses
    * 
    */
    // List
    "/addresses/list": addressesList ,
    // ListOne
    "/addresses/list/{address_id}": addressesListOne ,
    // Save
    "/addresses/save": addressesSave ,
    // Update
    "/addresses/update": addressesUpdate ,
    // Delete
    "/addresses/delete": addressesDelete ,   
    /**
    * 
    *        API / v1 / orders
    * 
    */
    // List
    "/orders/list": ordersList ,
    // ListOne
    "/orders/list/{order_id}": ordersListOne ,
    // Save
    "/orders/save": ordersSave ,
    // Update
    "/orders/update": ordersUpdate ,
    // Delete
    "/orders/delete": ordersDelete ,   
    /**
    * 
    *        API / v1 / order_items
    * 
    */
    // List
    "/order_items/list": order_itemsList ,
    // ListOne
    "/order_items/list/{order_item_id}": order_itemsListOne ,
    // Save
    "/order_items/save": order_itemsSave ,
    // Update
    "/order_items/update": order_itemsUpdate ,
    // Delete
    "/order_items/delete": order_itemsDelete ,   
    /**
    * 
    *        API / v1 / products
    * 
    */
    // List
    "/products/list": productsList ,
    // ListOne
    "/products/list/{product_id}": productsListOne ,
    // Save
    "/products/save": productsSave ,
    // Update
    "/products/update": productsUpdate ,
    // Delete
    "/products/delete": productsDelete ,   
    /**
    * 
    *        API / v1 / categories
    * 
    */
    // List
    "/categories/list": categoriesList ,
    // ListOne
    "/categories/list/{category_id}": categoriesListOne ,
    // Save
    "/categories/save": categoriesSave ,
    // Update
    "/categories/update": categoriesUpdate ,
    // Delete
    "/categories/delete": categoriesDelete ,   
    /**
    * 
    *        API / v1 / suppliers
    * 
    */
    // List
    "/suppliers/list": suppliersList ,
    // ListOne
    "/suppliers/list/{supplier_id}": suppliersListOne ,
    // Save
    "/suppliers/save": suppliersSave ,
    // Update
    "/suppliers/update": suppliersUpdate ,
    // Delete
    "/suppliers/delete": suppliersDelete ,   
    /**
    * 
    *        API / v1 / shippers
    * 
    */
    // List
    "/shippers/list": shippersList ,
    // ListOne
    "/shippers/list/{shipper_id}": shippersListOne ,
    // Save
    "/shippers/save": shippersSave ,
    // Update
    "/shippers/update": shippersUpdate ,
    // Delete
    "/shippers/delete": shippersDelete ,   
    /**
    * 
    *        API / v1 / payments
    * 
    */
    // List
    "/payments/list": paymentsList ,
    // ListOne
    "/payments/list/{payment_id}": paymentsListOne ,
    // Save
    "/payments/save": paymentsSave ,
    // Update
    "/payments/update": paymentsUpdate ,
    // Delete
    "/payments/delete": paymentsDelete ,   
    /**
    * 
    *        API / v1 / reviews
    * 
    */
    // List
    "/reviews/list": reviewsList ,
    // ListOne
    "/reviews/list/{review_id}": reviewsListOne ,
    // Save
    "/reviews/save": reviewsSave ,
    // Update
    "/reviews/update": reviewsUpdate ,
    // Delete
    "/reviews/delete": reviewsDelete ,   
    /**
    * 
    *        API / v1 / wishlists
    * 
    */
    // List
    "/wishlists/list": wishlistsList ,
    // ListOne
    "/wishlists/list/{wishlist_id}": wishlistsListOne ,
    // Save
    "/wishlists/save": wishlistsSave ,
    // Update
    "/wishlists/update": wishlistsUpdate ,
    // Delete
    "/wishlists/delete": wishlistsDelete ,   
    /**
    * 
    *        API / v1 / wishlist_items
    * 
    */
    // List
    "/wishlist_items/list": wishlist_itemsList ,
    // ListOne
    "/wishlist_items/list/{wishlist_item_id}": wishlist_itemsListOne ,
    // Save
    "/wishlist_items/save": wishlist_itemsSave ,
    // Update
    "/wishlist_items/update": wishlist_itemsUpdate ,
    // Delete
    "/wishlist_items/delete": wishlist_itemsDelete ,   
    /**
    * 
    *        API / v1 / shopping_carts
    * 
    */
    // List
    "/shopping_carts/list": shopping_cartsList ,
    // ListOne
    "/shopping_carts/list/{cart_id}": shopping_cartsListOne ,
    // Save
    "/shopping_carts/save": shopping_cartsSave ,
    // Update
    "/shopping_carts/update": shopping_cartsUpdate ,
    // Delete
    "/shopping_carts/delete": shopping_cartsDelete ,   
    /**
    * 
    *        API / v1 / cart_items
    * 
    */
    // List
    "/cart_items/list": cart_itemsList ,
    // ListOne
    "/cart_items/list/{cart_item_id}": cart_itemsListOne ,
    // Save
    "/cart_items/save": cart_itemsSave ,
    // Update
    "/cart_items/update": cart_itemsUpdate ,
    // Delete
    "/cart_items/delete": cart_itemsDelete ,   
    /**
    * 
    *        API / v1 / coupons
    * 
    */
    // List
    "/coupons/list": couponsList ,
    // ListOne
    "/coupons/list/{coupon_id}": couponsListOne ,
    // Save
    "/coupons/save": couponsSave ,
    // Update
    "/coupons/update": couponsUpdate ,
    // Delete
    "/coupons/delete": couponsDelete ,   
    /**
    * 
    *        API / v1 / inventory
    * 
    */
    // List
    "/inventory/list": inventoryList ,
    // ListOne
    "/inventory/list/{inventory_id}": inventoryListOne ,
    // Save
    "/inventory/save": inventorySave ,
    // Update
    "/inventory/update": inventoryUpdate ,
    // Delete
    "/inventory/delete": inventoryDelete ,   
    /**
    * 
    *        API / v1 / employees
    * 
    */
    // List
    "/employees/list": employeesList ,
    // ListOne
    "/employees/list/{employee_id}": employeesListOne ,
    // Save
    "/employees/save": employeesSave ,
    // Update
    "/employees/update": employeesUpdate ,
    // Delete
    "/employees/delete": employeesDelete ,   
    /**
    * 
    *        API / v1 / departments
    * 
    */
    // List
    "/departments/list": departmentsList ,
    // ListOne
    "/departments/list/{department_id}": departmentsListOne ,
    // Save
    "/departments/save": departmentsSave ,
    // Update
    "/departments/update": departmentsUpdate ,
    // Delete
    "/departments/delete": departmentsDelete ,   
    /**
    * 
    *        API / v1 / roles
    * 
    */
    // List
    "/roles/list": rolesList ,
    // ListOne
    "/roles/list/{role_id}": rolesListOne ,
    // Save
    "/roles/save": rolesSave ,
    // Update
    "/roles/update": rolesUpdate ,
    // Delete
    "/roles/delete": rolesDelete ,   
    /**
    * 
    *        API / v1 / permissions
    * 
    */
    // List
    "/permissions/list": permissionsList ,
    // ListOne
    "/permissions/list/{permission_id}": permissionsListOne ,
    // Save
    "/permissions/save": permissionsSave ,
    // Update
    "/permissions/update": permissionsUpdate ,
    // Delete
    "/permissions/delete": permissionsDelete ,   

   
  },
  definitions: {

     
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    customers: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    addresses: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    orders: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    order_items: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    products: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    categories: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    suppliers: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    shippers: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    payments: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    reviews: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    wishlists: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    wishlist_items: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    shopping_carts: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    cart_items: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    coupons: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    inventory: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    employees: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    departments: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    roles: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
    
    /**
     * 
     *  DEFINITION MODEL _[]ENT
     * 
     */
    permissions: {
      type: 'object',
      properties: {
        id: {
          type: 'number'
        },
        createdAt: {
          type: 'date-time',
        },
        updatedAt: {
          type: 'date-time'
        },
      },
    },
     
    
    
  },
  "securityDefinitions": {
    "bearerAuth": {
      "name": "Authorization",
      "in": "header",
      "type": "apiKey",
      "description": "JWT Authorization header"
    }
  },
  "security": [ { "bearerAuth": [] } ]
};

export default apiDoc;