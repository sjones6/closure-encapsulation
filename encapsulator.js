module.exports = function() {
    
    // Instantiate the private property inside of the 
    let privateProperty = {
        name: "",
        phone: ""
    };

    // Return an object. Since this object was
    // instantiated inside this closure,
    // it will have have access to privateProperty.
    // We'll provide some setters and getters to 
    // access our privateProperty store.
    return {
        setName: function(name) {
            privateProperty.name = name;
        },
        getName: function() {
            return privateProperty.name;
        },
        setPhone: function(phone) {
            privateProperty.phone = phone;
        },
        getPhone: function() {
            return privateProperty.phone;
        }
    };

};