/**
 * Created by che.mcnabb on 15-04-23.
 */
app.controller('CardController', ['$scope', function($scope){
    $scope.cards = {
        card : {
            action: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. \
        Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis \
        dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. \
        Aliquam in felis sit amet augue.",
            character: "Loren",
            dialogue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. \
        Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis \
        dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. \
        Aliquam in felis sit amet augue."
        }


    }
}]);