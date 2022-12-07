import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { ADeleteCategoryComponent } from '../aDelete-category/aDelete-category.component';
import { AEditCategoryComponent } from '../aEdit-category/aEdit-category.component';
import { AListCategoryComponent } from '../aList-category/aList-category.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
// import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
   { path: 'admin', component: DashboardComponent , canActivate: [AuthGuard] },
   { path:  'addCate', component: AddCategoryComponent  },
   { path:  'listCate', component: AListCategoryComponent  },
   { path:  'editCate/:id', component: AEditCategoryComponent  },
   { path:  'deleteCate/:id', component: ADeleteCategoryComponent  },

];

export const AdminRoutes = RouterModule.forChild(routes);
