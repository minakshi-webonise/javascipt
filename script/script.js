(function(calc, $, undefined){

  //variable to store operands, operator and result
  var storage ={
    operand1: null,
    operand2: null,
    operator: null,
    result: null
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

  //private function bind which does data binding events for numbers, operators and display box
  var _bind = {
    bindingValues: function () {
      $(".num-button" ).click(function() {
        $(".display-box").val($(".display-box").val() + $(this).attr('name'));
        if(storage.operand1 != null){
             // storage.operand1 = $(".display-box").val()
          storage.operand2 = $(".display-box").val()
          console.log("operand 2 : "+ storage.operand2)
          console.log("ope1 "+ storage.operand1)
        }
        else{
          console.log("missing operand1")
        }
     });
    },
    bindingOperators: function () {
      $(".operation").click(function() {
        storage.operand1 = $(".display-box").val()
        console.log("ope1 "+ storage.operand1)
        $(".display-box").val('')
        storage.operator = $(this).text();
        console.log("operator : " +storage.operator)
      });

    },
    clearEvent: function () {
      $(".clear").click(function() {
        $(".display-box").val('');
      });
    },
    bindingEqual: function () {
      $(".equals" ).click(function() {
        console.log("in eyasls")
        if(storage.operand1 != null && storage.operand2 != null &&
          storage.operator != null) {
          calc.Calculation(storage.operand1,storage.operand2,storage.operator)
          $(".display-box").val('')
          $(".display-box").val(storage.result)
          storage.operand1 = null;
          storage.operand2 = null;
          storage.operator = null;
          storage.result = null;
      }
      });
    }
  }

  //function to perform calculation called when equal button is pressed
  calc.Calculation = function(op1,op2,op){
    this.op1 = parseInt(op1,10);
    this.op2 = parseInt(op2,10);
    this.op = op;
    console.log("called happy if" + op1)
    _calculate.operation(this.op1,this.op2,this.op)

  };
  var _calculate = {
     operation: function (op1,op2,op) {
      console.log("fdsfsdf")
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
  // calc.Calculation.prototype.operate= function(arg1, arg2, operator) {
  //     var b = $(".some").val()
  //   // console.log(b)
  // };

})(window.Calculator = window.Calculator || {}, jQuery)
