AngularFireCartAdmin.controller("OrdersCtrl", [
    "$scope",
    "checkout",
    function($scope, checkout) {
        // Data from Firebase
        $scope.orders = checkout.orders.$asArray();
        $scope.customers = checkout.customers.$asArray();
        $scope.predicate = '-orderDate';

        $scope.statuses = [
            {option: "Novo"},
            {option: "Enviado"},
            {option: "Entregue"},
            {option: "Devolvida"},
            {option: "Cancelado"}
        ];
        $scope.status = $scope.statuses[1];

        $scope.save = function(order) {
            $scope.orders.$save(order);
        };
        $scope.remove = function(order) {
            $scope.orders.$remove(order);
        };
    }
]);