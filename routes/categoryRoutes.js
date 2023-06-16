import express from 'express';
import { isAdmin, requireSignIn} from './../middlewares/authMiddleware.js';
import { CreateCategoryController, SingleCategoryController, categoryController, deleteCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router()
//routes
//create routes
router.post(
    '/create-category',
    requireSignIn,isAdmin,
     CreateCategoryController
     );
//update category
router.put(
    '/update-category/:id',
    requireSignIn,
    isAdmin,
    updateCategoryController
    );
//getAll category
router.get('/get-category',categoryController);

//single category
router.get('/single-category/:slug',SingleCategoryController);

//delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController);

export default router;