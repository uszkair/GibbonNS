"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var _CURRENT_USER = "_CURRENT_USER";
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.prototype.isUserLoggedIn = function () {
        var loggedIn = !!this.user;
        return loggedIn;
    };
    BackendService.prototype.login = function (user) {
        var that = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (user.email === user.password) {
                    that.user = JSON.stringify(user);
                    resolve();
                }
                else {
                    reject({ message: 'Invalid Email/Password, For this example both should be same.' });
                }
            }, 1000);
        });
    };
    BackendService.prototype.logout = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                that.user = "";
                resolve();
            }, 1000);
        });
    };
    Object.defineProperty(BackendService.prototype, "user", {
        get: function () {
            return application_settings_1.getString(_CURRENT_USER);
        },
        set: function (theToken) {
            application_settings_1.setString(_CURRENT_USER, theToken);
        },
        enumerable: true,
        configurable: true
    });
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZEQUE0RDtBQUk1RCxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFHdEM7SUFBQTtJQXVDQSxDQUFDO0lBckNRLHVDQUFjLEdBQXJCO1FBQ0UsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFM0IsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVNLDhCQUFLLEdBQVosVUFBYSxJQUFVO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsVUFBVSxDQUFDO2dCQUNULElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDO2lCQUNYO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSwrREFBK0QsRUFBRSxDQUFDLENBQUE7aUJBQ3JGO1lBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsVUFBVSxDQUFDO2dCQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQVksZ0NBQUk7YUFBaEI7WUFDRSxPQUFPLGdDQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsQ0FBQzthQUVELFVBQWlCLFFBQWdCO1lBQy9CLGdDQUFTLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUpBO0lBbENVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0F1QzFCO0lBQUQscUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcblxyXG5jb25zdCBfQ1VSUkVOVF9VU0VSID0gXCJfQ1VSUkVOVF9VU0VSXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBpc1VzZXJMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgIGxldCBsb2dnZWRJbiA9ICEhdGhpcy51c2VyO1xyXG5cclxuICAgIHJldHVybiBsb2dnZWRJbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodXNlci5lbWFpbCA9PT0gdXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhhdC51c2VyID0gSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KHsgbWVzc2FnZTogJ0ludmFsaWQgRW1haWwvUGFzc3dvcmQsIEZvciB0aGlzIGV4YW1wbGUgYm90aCBzaG91bGQgYmUgc2FtZS4nIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGF0LnVzZXIgPSBcIlwiO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSwgMTAwMClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgdXNlcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhfQ1VSUkVOVF9VU0VSKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0IHVzZXIodGhlVG9rZW46IHN0cmluZykge1xyXG4gICAgc2V0U3RyaW5nKF9DVVJSRU5UX1VTRVIsIHRoZVRva2VuKTtcclxuICB9XHJcbn0iXX0=