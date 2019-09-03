"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var app_routing_module_1 = require("./app-routing.module");
var backend_service_1 = require("./services/backend.service");
var utility_service_1 = require("./services/utility.service");
var login_component_1 = require("./login/login.component");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var auth_guard_service_1 = require("./auth-guard.service");
var bluetooth_service_1 = require("~/app/services/bluetooth.service");
var bluetooth_component_1 = require("~/app/bluetooth/bluetooth.component");
var bluetooth_list_component_1 = require("~/app/bluetooth-list/bluetooth-list.component");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                bluetooth_component_1.BluetoothComponent,
                bluetooth_list_component_1.BluetoothListComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
            ],
            exports: [
                bluetooth_component_1.BluetoothComponent,
                bluetooth_list_component_1.BluetoothListComponent
            ],
            providers: [
                backend_service_1.BackendService,
                utility_service_1.UtilityService,
                bluetooth_service_1.BluetoothService,
                [auth_guard_service_1.AuthGuard]
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBRW5GLDJEQUF3RDtBQUV4RCw4REFBNEQ7QUFDNUQsOERBQTREO0FBRTVELDJEQUF5RDtBQUN6RCxpREFBK0M7QUFDL0Msd0RBQXNEO0FBRXRELDJEQUFpRDtBQUNqRCxzRUFBa0U7QUFDbEUsMkVBQXVFO0FBQ3ZFLDBGQUFxRjtBQW9DckY7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBbENyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIscUNBQWdCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLHdDQUFrQjtnQkFDbEIsaURBQXNCO2dCQUN0QixnQ0FBYztnQkFDZCw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlEQUFzQjthQUN6QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxnQ0FBYztnQkFDZCxnQ0FBYztnQkFDZCxvQ0FBZ0I7Z0JBQ2hCLENBQUMsOEJBQVMsQ0FBQzthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFFRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xyXG5pbXBvcnQge0JsdWV0b290aFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9ibHVldG9vdGguc2VydmljZVwiO1xyXG5pbXBvcnQge0JsdWV0b290aENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2JsdWV0b290aC9ibHVldG9vdGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qmx1ZXRvb3RoTGlzdENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2JsdWV0b290aC1saXN0L2JsdWV0b290aC1saXN0LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBCbHVldG9vdGhDb21wb25lbnQsXHJcbiAgICAgICAgQmx1ZXRvb3RoTGlzdENvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBCbHVldG9vdGhDb21wb25lbnQsXHJcbiAgICAgICAgQmx1ZXRvb3RoTGlzdENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgICAgIFV0aWxpdHlTZXJ2aWNlLFxyXG4gICAgICAgIEJsdWV0b290aFNlcnZpY2UsXHJcbiAgICAgICAgW0F1dGhHdWFyZF1cclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5cclxuLypcclxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=