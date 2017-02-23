module.exports = function(name, phone) {
    
    // Although this is now a constructor function,
    // the rules of closures still apply.
    // Simply never set privateProperty as property 
    // on `this` and nothing outside of the 
    // constructor function will have access to it.
    let privateProperty = {
        name: "",
        phone: ""
    };

    // Define our getters and setters
    // which provide a controlled interface
    // to our private variable `privateProperty`
    this.setName = function(name) {
        privateProperty.name = name;
    };
    this.getName = function() {
        return privateProperty.name;
    };
    this.setPhone = function(phone) {
        privateProperty.phone = phone;
    };
    this.getPhone = function() {
        return privateProperty.phone;
    }

    // Define initialization sequence
    // which we'll call immediately
    this.init = function() {
        if (name) {
            this.setName(name);
        }
        if (phone) {
            this.setPhone(phone);
        }
    }
    this.init();
};