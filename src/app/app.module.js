"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
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
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var nativescript_angular_1 = require("nativescript-angular");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
function createTranslateLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
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
                nativescript_angular_1.NativeScriptHttpModule,
                angular_1.NativeScriptUISideDrawerModule,
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [http_1.HttpClient]
                    }
                })
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
                bluetooth_list_component_1.BluetoothListComponent,
                core_2.TranslateModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUdyRSwyREFBd0Q7QUFFeEQsOERBQTREO0FBQzVELDhEQUE0RDtBQUU1RCwyREFBeUQ7QUFDekQsaURBQStDO0FBQy9DLHdEQUFzRDtBQUV0RCwyREFBaUQ7QUFDakQsc0VBQWtFO0FBQ2xFLDJFQUF1RTtBQUN2RSwwRkFBcUY7QUFDckYsOERBQWtGO0FBQ2xGLDZEQUE0RDtBQUM1RCw0Q0FHNkI7QUFDN0IsNkNBQWtFO0FBQ2xFLDBEQUErRDtBQUUvRCxTQUFnQixxQkFBcUIsQ0FBQyxJQUFnQjtJQUNsRCxPQUFPLElBQUksaUNBQW1CLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3BFLENBQUM7QUFGRCxzREFFQztBQStDRDtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE3Q3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDZDQUFzQjtnQkFDdEIsd0NBQThCO2dCQUM5Qix3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIscUNBQWdCO2dCQUNoQix1QkFBZ0I7Z0JBQ2hCLHNCQUFlLENBQUMsT0FBTyxDQUFDO29CQUNwQixNQUFNLEVBQUU7d0JBQ0osT0FBTyxFQUFFLHNCQUFlO3dCQUN4QixVQUFVLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDbkMsSUFBSSxFQUFFLENBQUMsaUJBQVUsQ0FBQztxQkFDckI7aUJBQ0osQ0FBQzthQUNMO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLHdDQUFrQjtnQkFDbEIsaURBQXNCO2dCQUN0QixnQ0FBYztnQkFDZCw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlEQUFzQjtnQkFDdEIsc0JBQWU7YUFDbEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2dCQUNoQixDQUFDLDhCQUFTLENBQUM7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBRUY7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xyXG5pbXBvcnQge0JsdWV0b290aFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9ibHVldG9vdGguc2VydmljZVwiO1xyXG5pbXBvcnQge0JsdWV0b290aENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2JsdWV0b290aC9ibHVldG9vdGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qmx1ZXRvb3RoTGlzdENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2JsdWV0b290aC1saXN0L2JsdWV0b290aC1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRIdHRwTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtcclxuICAgIFRyYW5zbGF0ZUxvYWRlcixcclxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcclxufSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZUh0dHBMb2FkZXJ9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zbGF0ZUxvYWRlcihodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgJy4vYXNzZXRzL2kxOG4vJywgJy5qc29uJyk7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgICAgICAgIGxvYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxyXG4gICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogKGNyZWF0ZVRyYW5zbGF0ZUxvYWRlciksXHJcbiAgICAgICAgICAgICAgICBkZXBzOiBbSHR0cENsaWVudF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEJsdWV0b290aENvbXBvbmVudCxcclxuICAgICAgICBCbHVldG9vdGhMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIEJsdWV0b290aENvbXBvbmVudCxcclxuICAgICAgICBCbHVldG9vdGhMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIFRyYW5zbGF0ZU1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgICAgIFV0aWxpdHlTZXJ2aWNlLFxyXG4gICAgICAgIEJsdWV0b290aFNlcnZpY2UsXHJcbiAgICAgICAgW0F1dGhHdWFyZF1cclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5cclxuLypcclxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=