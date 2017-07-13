"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = (function () {
    function AppComponent() {
        console.dir({
            type: "Apple",
            color: "Red"
        });
        firebase.init({}).then(function (instance) {
            console.log("firebase.init done");
            firebase.setValue('/companies', {
                foo: 'bar',
                updateTs: firebase.ServerValue.TIMESTAMP
            });
            firebase.push('/MyData', {
                'first': 'Eddy',
                'last': 'Verbruggen',
                'birthYear': 1977,
                'isMale': true,
                'address': {
                    'street': 'foostreet',
                    'number': 123
                }
            }).then(function (result) {
                console.log("created key:   " + result.key);
            });
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar title=\"My Apple\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/apple.jpg\"></Image>\n  ",
        styles: ["\n    @keyframes spin {\n      from { transform: rotate(0); } to { transform: rotate(360); }\n    }\n    Image {\n      animation-name: spin; animation-duration: 3s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsdURBQTBEO0FBbUIxRCxJQUFhLFlBQVk7SUFDdkI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ1YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFJYixDQUFDLENBQUMsSUFBSSxDQUNMLFVBQUMsUUFBUTtZQUVQLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxRQUFRLENBQUMsUUFBUSxDQUNiLFlBQVksRUFDWjtnQkFDRSxHQUFHLEVBQUUsS0FBSztnQkFDVixRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTO2FBQ3pDLENBQ0osQ0FBQztZQUVGLFFBQVEsQ0FBQyxJQUFJLENBQ1QsU0FBUyxFQUNUO2dCQUNFLE9BQU8sRUFBRSxNQUFNO2dCQUNmLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixXQUFXLEVBQUUsSUFBSTtnQkFDakIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsU0FBUyxFQUFFO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsR0FBRztpQkFDZDthQUNGLENBQ0osQ0FBQyxJQUFJLENBQ0YsVUFBVSxNQUFNO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FDSixDQUFDO1FBRUosQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBL0NZLFlBQVk7SUFqQnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsMkhBR1Q7UUFDRCxNQUFNLEVBQUUsQ0FBQyx3UUFTUixDQUFDO0tBQ0gsQ0FBQzs7R0FDVyxZQUFZLENBK0N4QjtBQS9DWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcGxlXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XG4gICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2FwcGxlLmpwZ1wiPjwvSW1hZ2U+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwKTsgfVxuICAgIH1cbiAgICBJbWFnZSB7XG4gICAgICBhbmltYXRpb24tbmFtZTogc3BpbjsgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5kaXIoe1xuICAgICAgdHlwZTogXCJBcHBsZVwiLFxuICAgICAgY29sb3I6IFwiUmVkXCJcbiAgICB9KTtcblxuICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxuICAgICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cblxuICAgIH0pLnRoZW4oXG4gICAgICAoaW5zdGFuY2UpID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgICAgICAgZmlyZWJhc2Uuc2V0VmFsdWUoXG4gICAgICAgICAgICAnL2NvbXBhbmllcycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGZvbzogJ2JhcicsXG4gICAgICAgICAgICAgIHVwZGF0ZVRzOiBmaXJlYmFzZS5TZXJ2ZXJWYWx1ZS5USU1FU1RBTVBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBmaXJlYmFzZS5wdXNoKFxuICAgICAgICAgICAgJy9NeURhdGEnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnZmlyc3QnOiAnRWRkeScsXG4gICAgICAgICAgICAgICdsYXN0JzogJ1ZlcmJydWdnZW4nLFxuICAgICAgICAgICAgICAnYmlydGhZZWFyJzogMTk3NyxcbiAgICAgICAgICAgICAgJ2lzTWFsZSc6IHRydWUsXG4gICAgICAgICAgICAgICdhZGRyZXNzJzoge1xuICAgICAgICAgICAgICAgICdzdHJlZXQnOiAnZm9vc3RyZWV0JyxcbiAgICAgICAgICAgICAgICAnbnVtYmVyJzogMTIzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS50aGVuKFxuICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQga2V5OiAgIFwiICsgcmVzdWx0LmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=