/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import './lib/connect';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './api/swagger'; // Json swagger description

/** 
 * import routes
 */
 
import customersRoutes from './routes/customers';
import addressesRoutes from './routes/addresses';
import ordersRoutes from './routes/orders';
import order_itemsRoutes from './routes/order_items';
import productsRoutes from './routes/products';
import categoriesRoutes from './routes/categories';
import suppliersRoutes from './routes/suppliers';
import shippersRoutes from './routes/shippers';
import paymentsRoutes from './routes/payments';
import reviewsRoutes from './routes/reviews';
import wishlistsRoutes from './routes/wishlists';
import wishlist_itemsRoutes from './routes/wishlist_items';
import shopping_cartsRoutes from './routes/shopping_carts';
import cart_itemsRoutes from './routes/cart_items';
import couponsRoutes from './routes/coupons';
import inventoryRoutes from './routes/inventory';
import employeesRoutes from './routes/employees';
import departmentsRoutes from './routes/departments';
import rolesRoutes from './routes/roles';
import permissionsRoutes from './routes/permissions'; 

/**
* Rota principal
*/
routes.get("/", (req, res) =>  res.send("💻 Teste Projeto - API ❤️"));


/**
* SWAGGER ROUTER
*/
routes.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
*  Entities routes
*/
 
routes.use("/v1/customers", customersRoutes);
routes.use("/v1/addresses", addressesRoutes);
routes.use("/v1/orders", ordersRoutes);
routes.use("/v1/order_items", order_itemsRoutes);
routes.use("/v1/products", productsRoutes);
routes.use("/v1/categories", categoriesRoutes);
routes.use("/v1/suppliers", suppliersRoutes);
routes.use("/v1/shippers", shippersRoutes);
routes.use("/v1/payments", paymentsRoutes);
routes.use("/v1/reviews", reviewsRoutes);
routes.use("/v1/wishlists", wishlistsRoutes);
routes.use("/v1/wishlist_items", wishlist_itemsRoutes);
routes.use("/v1/shopping_carts", shopping_cartsRoutes);
routes.use("/v1/cart_items", cart_itemsRoutes);
routes.use("/v1/coupons", couponsRoutes);
routes.use("/v1/inventory", inventoryRoutes);
routes.use("/v1/employees", employeesRoutes);
routes.use("/v1/departments", departmentsRoutes);
routes.use("/v1/roles", rolesRoutes);
routes.use("/v1/permissions", permissionsRoutes); 


export default routes;