        /*
Please consider that the JS part isn't production ready at all, I just code it to show the concept of merging filters and titles together !
V1.1 By Prakhar Srivastava
*/
$(document).ready(function () {
    $(".filterable .btn-filter").click(function () {
        var t = $(this).parents(".filterable"), e = t.find(".filters input"),
            i = t.find(".table tbody"); 1 == e.prop("disabled") ? (e.prop("disabled", !1), e.first().focus()) : (e.val("").prop("disabled", !0), i.find(".no-result").remove(), i.find("tr").show())
    }), $(".filterable .filters input").keyup(function (t) {
        if ("9" != (t.keyCode || t.which)) {
            var e = $(this), i = e.val().toLowerCase(), n = e.parents(".filterable"), r = n.find(".filters th").index(e.parents("th")), d = n.find(".table"), l = d.find("tbody tr"), f = l.filter(function () { return -1 === $(this).find("td").eq(r).text().toLowerCase().indexOf(i) }); d.find("tbody .no-result").remove(), l.show(), f.hide(), f.length === l.length && d.find("tbody").prepend($('<tr class="no-result text-center"><td colspan="' + d.find(".filters th").length + '">No result found</td></tr>'))
        }
    })
}); 