"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var founded_device_1 = require("~/app/services/founded.device");
var BluetoothService = /** @class */ (function () {
    function BluetoothService() {
    }
    Object.defineProperty(BluetoothService.prototype, "IsEnabled", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                try {
                    console.log('IsEnabled: ', _this._adapter.isEnabled());
                    resolve(_this._adapter != null && _this._adapter.isEnabled());
                }
                catch (ex) {
                    reject(ex);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothService.prototype, "FoundedDevices", {
        get: function () {
            var devices = this._adapter.getBondedDevices().toArray();
            var results = new Array();
            var length = devices.length;
            for (var i = 0; i < length; i++) {
                var device = (devices[i]);
                var address = device.getAddress();
                var name_1 = device.getName();
                results.push(new founded_device_1.FoundedDevice(address, name_1));
            }
            return results;
        },
        enumerable: true,
        configurable: true
    });
    BluetoothService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BluetoothService);
    return BluetoothService;
}());
exports.BluetoothService = BluetoothService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZXRvb3RoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJibHVldG9vdGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxnRUFBNEQ7QUFLNUQ7SUFFRTtJQUFnQixDQUFDO0lBS2pCLHNCQUFXLHVDQUFTO2FBQXBCO1lBQUEsaUJBU0M7WUFSQyxPQUFPLElBQUksT0FBTyxDQUFVLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQzFDLElBQUk7b0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUN0RCxPQUFPLENBQUMsS0FBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2lCQUM3RDtnQkFBQyxPQUFPLEVBQUUsRUFBRTtvQkFDWCxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ1o7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsNENBQWM7YUFBekI7WUFFRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQWlCLENBQUM7WUFDM0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUUvQixJQUFNLE1BQU0sR0FBc0MsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFL0QsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNwQyxJQUFNLE1BQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRTlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSw4QkFBYSxDQUFDLE9BQU8sRUFBRSxNQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1lBRUQsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFwQ1UsZ0JBQWdCO1FBSDVCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLGdCQUFnQixDQTJDNUI7SUFBRCx1QkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm91bmRlZERldmljZX0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2ZvdW5kZWQuZGV2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJsdWV0b290aFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfYWRhcHRlciA6IGFuZHJvaWQuYmx1ZXRvb3RoLkJsdWV0b290aEFkYXB0ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21hbmFnZXIgOiBhbnk7XG5cbiAgcHVibGljIGdldCBJc0VuYWJsZWQoKSA6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZygnSXNFbmFibGVkOiAnLCB0aGlzLl9hZGFwdGVyLmlzRW5hYmxlZCgpKTtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl9hZGFwdGVyICE9IG51bGwgJiYgdGhpcy5fYWRhcHRlci5pc0VuYWJsZWQoKSk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZWplY3QoZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBwdWJsaWMgZ2V0IEZvdW5kZWREZXZpY2VzKCkgOiBBcnJheTxGb3VuZGVkRGV2aWNlPiB7XG5cbiAgICBjb25zdCBkZXZpY2VzID0gdGhpcy5fYWRhcHRlci5nZXRCb25kZWREZXZpY2VzKCkudG9BcnJheSgpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXk8Rm91bmRlZERldmljZT4oKTtcbiAgICBjb25zdCBsZW5ndGggPSBkZXZpY2VzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblxuICAgICAgY29uc3QgZGV2aWNlID0gPGFuZHJvaWQuYmx1ZXRvb3RoLkJsdWV0b290aERldmljZT4oZGV2aWNlc1tpXSk7XG5cbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBkZXZpY2UuZ2V0QWRkcmVzcygpO1xuICAgICAgY29uc3QgbmFtZSA9IGRldmljZS5nZXROYW1lKCk7XG5cbiAgICAgIHJlc3VsdHMucHVzaChuZXcgRm91bmRlZERldmljZShhZGRyZXNzLCBuYW1lKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuXG5cblxuXG5cbn1cbiJdfQ==