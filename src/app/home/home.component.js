"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("../services/backend.service");
var router_1 = require("nativescript-angular/router");
var utility_service_1 = require("../services/utility.service");
var HomeComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function HomeComponent(backendService, routerExtension, utilityService) {
        this.backendService = backendService;
        this.routerExtension = routerExtension;
        this.utilityService = utilityService;
        this.isLoading = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.isLoading = true;
        this.backendService.logout()
            .then(function () {
            _this.routerExtension.navigate(['/login']);
            _this.isLoading = false;
        });
    };
    HomeComponent.prototype.isTablet = function () {
        return this.utilityService.isTablet();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService, router_1.RouterExtensions,
            utility_service_1.UtilityService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrREFBNkQ7QUFDN0Qsc0RBQStEO0FBQy9ELCtEQUE2RDtBQU83RDtJQUlJLDRJQUE0STtJQUM1SSxpSEFBaUg7SUFDakgsdUJBQW9CLGNBQThCLEVBQVUsZUFBaUMsRUFDakYsY0FBOEI7UUFEdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUwxQyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBSzRCLENBQUM7SUFFL0MsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTthQUN2QixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBdkJRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBT3NDLGdDQUFjLEVBQTJCLHlCQUFnQjtZQUNqRSxnQ0FBYztPQVBqQyxhQUFhLENBd0J6QjtJQUFELG9CQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtaG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgdXRpbGl0eVNlcnZpY2U6IFV0aWxpdHlTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYmFja2VuZFNlcnZpY2UubG9nb3V0KClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc1RhYmxldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51dGlsaXR5U2VydmljZS5pc1RhYmxldCgpO1xyXG4gICAgfVxyXG59Il19