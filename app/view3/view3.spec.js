'use strict';

describe('myApp.view3 module', function() {

    beforeEach(module('myApp.view3'));
    beforeEach(module('myApp.templates'));

    describe('view3 controller', function(){

        it('should create controller', inject(function($controller, $rootScope) {
            //spec body
            const scope = $rootScope.$new();
            const view3Ctrl = $controller('View3Ctrl', {$scope: scope});
            expect(view3Ctrl).toBeDefined();
        }));

        it('should hide message on condition false', inject(function ($controller, $rootScope) {
            const scope = $rootScope.$new();
            $controller('View3Ctrl', {$scope: scope});
            expect(scope.display).toBe(false);
        }));

        it('should show message on condition true', inject(function ($controller) {
            expect(false).toBe(false);
        }));

        describe('with $compile', function () {
            let element;
            let scope;
            let controller;
            beforeEach(inject(function ($templateCache, $controller, $rootScope, $compile) {
                scope = $rootScope.$new();
                $controller('View3Ctrl', {$scope: scope});
                let template = $templateCache.get('view3/view3.html');
                element = $compile(template)(scope);
                controller = element.controller('View3Ctrl');
                console.log(element);
            }));

            it('should render template', inject(function ($rootScope) {
                expect(element[0].querySelector('#message')).toBeNull();
                expect(scope.display).toBe(false);
                scope.buttonClick(false);
                expect(scope.display).toBe(true);
                $rootScope.$apply();
                console.log(element);
                expect(element[6].querySelector('#message').innerText).toBe('Button Has been clicked!');
            }));
        });

    });
});