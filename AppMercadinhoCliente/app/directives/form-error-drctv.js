AngularFireCart.directive("alertDanger", function() {
    return{
        restrict: "C",
        template: "<strong>Yeh antes de processar isso!</strong> {{error}}"
    };
});