function loadAllOrderDetails() {
    $("#tOrder").empty();
    for (var i of OrderDB) {
        let row = `<tr><td>${i.getOrderCode()}</td><td>${i.getDateOfOrder()}</td><td>${i.getTotalPrice()}</td></tr>`;
        $("#tOrder").append(row);
    }
}