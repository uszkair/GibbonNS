"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bluetooth_service_1 = require("~/app/services/bluetooth.service");
var BluetoothListComponent = /** @class */ (function () {
    function BluetoothListComponent(blService) {
        this.blService = blService;
    }
    BluetoothListComponent.prototype.ngOnInit = function () {
        this.searchDevice();
    };
    BluetoothListComponent.prototype.searchDevice = function () {
        this.foundedDevices = this.blService.FoundedDevices;
    };
    BluetoothListComponent.prototype.onItemTap = function (args) {
        console.log('Item with index: ' + args.index + ' tapped');
    };
    BluetoothListComponent = __decorate([
        core_1.Component({
            selector: 'ns-bluetooth-list',
            templateUrl: './bluetooth-list.component.html',
            moduleId: module.id,
            styleUrls: ['./bluetooth-list.component.css']
        }),
        __metadata("design:paramtypes", [bluetooth_service_1.BluetoothService])
    ], BluetoothListComponent);
    return BluetoothListComponent;
}());
exports.BluetoothListComponent = BluetoothListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZXRvb3RoLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmx1ZXRvb3RoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQWdEO0FBQ2hELHNFQUFrRTtBQVNsRTtJQUlJLGdDQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUUvQyxDQUFDO0lBR0QseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR0QsNkNBQVksR0FBWjtRQUNRLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7SUFDNUQsQ0FBQztJQUVELDBDQUFTLEdBQVQsVUFBVSxJQUFtQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQXBCUSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDaEQsQ0FBQzt5Q0FLaUMsb0NBQWdCO09BSnRDLHNCQUFzQixDQXFCbEM7SUFBRCw2QkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SXRlbUV2ZW50RGF0YX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCbHVldG9vdGhTZXJ2aWNlfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYmx1ZXRvb3RoLnNlcnZpY2VcIjtcbmltcG9ydCB7Rm91bmRlZERldmljZX0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2ZvdW5kZWQuZGV2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtYmx1ZXRvb3RoLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ibHVldG9vdGgtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6IFsnLi9ibHVldG9vdGgtbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmx1ZXRvb3RoTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBmb3VuZGVkRGV2aWNlczogQXJyYXk8Rm91bmRlZERldmljZT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJsU2VydmljZTogQmx1ZXRvb3RoU2VydmljZSkge1xuXG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hEZXZpY2UoKTtcbiAgICB9XG5cblxuICAgIHNlYXJjaERldmljZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRlZERldmljZXMgPSB0aGlzLmJsU2VydmljZS5Gb3VuZGVkRGV2aWNlcztcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ0l0ZW0gd2l0aCBpbmRleDogJyArIGFyZ3MuaW5kZXggKyAnIHRhcHBlZCcpO1xuICAgIH1cbn1cbiJdfQ==