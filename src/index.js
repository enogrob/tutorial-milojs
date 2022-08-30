// run when DOM is ready
milo(function () {
    // create and bind components with milo.binder
    var scope = milo.binder();

    // attach subscriber to data change event via data facet
    // of myField component
    scope.myField.data.on('', function(msg, data) {
    	scope.myCurrentValue.data.set(data.newValue);
      // alternatively:
      // scope.myCurrentValue.el.innerHTML = data.newValue;
    });

    // attach subscriber to click event via events facet
    // of myTestButton component
    scope.myTestButton.events.on('click', function(msg, event) {
    	scope.myTestValue.el.innerHTML = scope.myField.data.value();
    });

    // connect two components directly via their data facets
    // using milo.minder
    milo.minder(scope.myField.data, '->', scope.myTestValue2.data);
});