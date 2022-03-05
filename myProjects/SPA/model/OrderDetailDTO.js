function OrderDetailDTO(itemCode,itemName,orderQTY,tPrice){
    var __itemCode=itemCode;
    var __ItemName=itemName;
    var __orderQTY=orderQTY;
    var __tPrice=tPrice;

    this.getItemCodeOfDetails = function () {
        return __itemCode;
    }
    this.getItemNameOfDetails = function () {
        return __ItemName;
    }
    this.getOrderQTY = function () {
        return __orderQTY;
    }
    this.getTPrice = function () {
        return __tPrice;
    }


    this.setItemCodeOfDetails = function (itemCode) {
        __itemCode=itemCode;
    }
    this.setItemNameOfDetails = function (itemName) {
        __ItemName=itemName;
    }
    this.setOrderQTY = function (orderQTY) {
        __orderQTY=orderQTY;
    }
    this.setTPrice = function (tPrice) {
        __tPrice=tPrice;
    }
}