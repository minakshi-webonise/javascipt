(function(calc, $, undefined){

  //variable to store operands, operator and result
  var storage ={
    operator: null,
    data1:"",
    result: null,
    data2: ""
   
  }
  //called on load of doccument
  $(document).ready(function(){
    bindEvent();
  })

  function bindEvent () {
    //private scope for application
     _bind.bindingValues()
     _bind.bindingEqual()
     _bind.bindingOperators()
     _bind.clearEvent()
  }

  var _operate = {
    saveValue: function(data) {
      if(storage.operator == null) {
        storage.data1 = storage.data1.concat(data)
        _display.showDisplayValue(storage.data1)
      }
      else {
        storage.data2 = storage.data2.concat(data)
        _display.showDisplayValue(storage.data2)
      }
    }
  }

  //private method to display values in display box
  var _display = {
        showDisplayValue: function(data){
      $(".display-box").val(data)
    },
    clear: function(){
       $(".display-box").val('');
    }
  }
  
  //private function bind which does data binding events for numbers, operators and display box
  var _bind = {
    bindingValues: function () {
      $(".num-button" ).click(function() {
        var data = $(this).data('val').toString()
         _operate.saveValue(data)
      });
    },
    bindingOperators: function () {
      $(".operation").click(function() {
        _display.clear()
         if(storage.operator != null) {
          calc.Calculation(storage.data1,storage.data2,storage.operator)
          _display.showDisplayValue(storage.result)
          storage.data1 = storage.result
          storage.data2 = ""
        }
        storage.operator = $(this).text();
      });
    },
    clearEvent: function () {
      $(".clear").click(function() {
        _display.clear()
      });
    },
    bindingEqual: function () {
      $(".equals" ).click(function() {
        if(storage.data1 != null && storage.data2 != null &&
          storage.operator != null) {
          calc.Calculation(storage.data1,storage.data2,storage.operator)
          _display.showDisplayValue(storage.result)
      }
      });
    }
  }

  //function to perform calculation called when equal button is pressed
  calc.Calculation = function(op1,op2,op){
    this.op1 = parseInt(op1,10);
    this.op2 = parseInt(op2,10);
    this.op = op;
    _calculate.operation(this.op1,this.op2,this.op)

  };
  var _calculate = {
     operation: function (op1,op2,op) {
      switch (op) {
        case '+':
          storage.result = op1 + op2;
          break;
        case '-':
          storage.result = op1 - op2;
          break;
        case 'x':
          storage.result = op1 * op2
          break;
        case '/':
          storage.result = op1 / op2
          break;
        default:
          alert("not operator")
      }
    }

  }

})(window.Calculator = window.Calculator || {}, jQuery)
