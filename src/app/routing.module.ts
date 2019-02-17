import { BasicTreeComponent } from './examples/basic-tree/basic-tree.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollapsedTreeComponent } from './examples/collapsed-tree/collapsed-tree.component';
import { ParentIframeComponent } from './examples/iframe/parent-iframe/parent-iframe.component';
import { ChildIframeComponent } from './examples/iframe/child-iframe/child-iframe.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'index' },
    { path: 'index', component: IndexComponent },
    { path: 'examples/basic-tree', component: BasicTreeComponent },
    { path: 'examples/collapsed-tree', component: CollapsedTreeComponent },
    { path: 'examples/parent-iframe', component: ParentIframeComponent },
    { path: 'examples/child-iframe', component: ChildIframeComponent },
    { path: '**', redirectTo: 'index' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [],
    exports: [RouterModule]
})
export class RoutingModule {
}
