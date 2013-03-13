//-----------------------------------------------------
//start Add, Edit, Delete - Success Common Funtion

// Add Success
function AjaxAddSuccess() {

    var uTtId = "#updateTargetId";
    var dId = "#appAddDailog";
    var cMId = "#commonMessage";
    var cM = "Successfull!";

    alert(dId);

    if ($(uTtId).html() == "True") {
        //now we can close the dialog
        $(dId).dialog('close');
        //$('#appDailog').dialog('close');
        //twitter type notification
        $(cMId).html(cM);
        $(cMId).delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $(uTtId).show();
    }

}

// Edit Success
function AjaxEditSuccess() {

    var uTtId = "#updateTargetId";
    var dId = "#appEditDailog";
    var cMId = "#commonMessage";
    var cM = "Successfull!";

    if ($(uTtId).html() == "True") {
        //now we can close the dialog
        $(dId).dialog('close');
        //$('#appEditDailog').dialog('close');
        //twitter type notification
        $(cMId).html(cM);
        $(cMId).delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $(uTtId).show();
    }

}

// Delete Success
function AjaxDeleteSuccess() {

    var uTtId = "#updateTargetId";
    var dId = "#appDeleteDialog";
    var cMId = "#commonMessage";
    var cM = "Successfull!";

    if ($(uTtId).html() == "True") {
        //now we can close the dialog
        $(dId).dialog('close');
        //$('#appDeleteDialog').dialog('close');
        //twitter type notification
        $(cMId).html(cM);
        $(cMId).delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $(uTtId).show();
    }

}

// Details Success
function AjaxDetailsSuccess() {

    var uTtId = "#updateTargetId";
    var dId = "#appDetailsDialog";
    var cMId = "#commonMessage";
    var cM = "Successfull!";

    if ($(uTtId).html() == "True") {
        //now we can close the dialog
        $(dId).dialog('close');
        //$('#appDetailsDialog').dialog('close');
        //twitter type notification
        $(cMId).html(cM);
        $(cMId).delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $(uTtId).show();
    }

}

function AjaxSuccess() {

    var uTtId = "#updateTargetId";
    var dId = "#appDailog";
    var cMId = "#commonMessage";
    var cM = "Successfull!";

    if ($(uTtId).html() == "True") {
        //now we can close the dialog
        //$(dId).dialog('close');
        $('#appDailog').dialog('close');
        //twitter type notification
        $(cMId).html(cM);
        $(cMId).delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $(uTtId).show();
    }

}

function AjaxSuccessWithDailog(dailogId) {

    var uTtId = "#updateTargetId";
    var dId = "#" + dailogId;
    var cMId = "#commonMessage";
    var cM = "Successfull!";

    if ($(uTtId).html() == "True") {
        //now we can close the dialog
        $(dId).dialog('close');
        //$('#appDailog').dialog('close');
        //twitter type notification
        $(cMId).html(cM);
        $(cMId).delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $(uTtId).show();
    }

}

function AjaxSuccessWithMess(commonMessage) {

    var uTtId = "#updateTargetId";
    var dId = "#appDailog";
    var cMId = "#commonMessage";
    var cM = commonMessage;

    if ($(uTtId).html() == "True") {

        //now we can close the dialog
        $(dId).dialog('close');
        //twitter type notification
        $(cMId).html(cM);
        $(cMId).delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $(uTtId).show();
    }
}

function AjaxSuccessWithParam(updateTargetId, dailogId, commonMessageId, commonMessage) {

    var uTtId = "#" + updateTargetId;
    var dId = "#" + dailogId;
    var cMId = "#" + commonMessageId;
    var cM = commonMessage;

    if ($(uTtId).html() == "True") {

        //now we can close the dialog
        $(dId).dialog('close');
        //twitter type notification
        $(cMId).html(cM);
        $(cMId).delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $(uTtId).show();
    }
}

//end Add, Edit, Delete - Success Common Funtion
//-----------------------------------------------------

//-----------------------------------------------------
//start Create Dialog Dynamical by linkObj param
function createDialogWithLnkObj(linkObj) {

    //change the title of the dialog
    //var linkObj = $(this);
    var linkUrlVal = linkObj.attr('href');
    var linkUrlTitle = linkObj.attr('title');
    var linkUrlRel = linkObj.attr('rel');
    var linkUrlFormId = linkObj.attr('form');
    var updateTargetId = 'updateTargetId';

    var lUrlVal = linkUrlVal;
    var lUrlTitle = linkUrlTitle;
    var lUrlRel = linkUrlRel;
    var fId = linkUrlFormId;
    var uTId = updateTargetId;

    if (lUrlTitle == "Add") {
        addDialog(lUrlRel, lUrlVal, fId, uTId);
    }
    else if (lUrlTitle == "Edit") {
        editDialog(lUrlRel, lUrlVal, fId, uTId);
    }
    else if (lUrlTitle == "Delete") {
        deleteDialog(lUrlRel, lUrlVal, fId, uTId);
    }
    else if (lUrlTitle = "Details") {
        detailsDialog(lUrlRel, lUrlVal);
    }
    else {
        return;
    }
}

//-----------------------------------------------------
//start Create Dialog Dynamical by linkUrlVal, linkUrlTitle, formId, updateTargetId param
function createDialogWithParam(linkUrlVal, linkUrlTitle, formId, updateTargetId) {

    var lUrlVal = linkUrlVal;
    var lUrlTitle = linkUrlTitle;
    var fId = formId;
    var uTId = updateTargetId;

    if (lUrlTitle == "Add") {
        addDialog(lUrlVal, fId, uTId);
    }
    else if (lUrlTitle == "Edit") {
        editDialog(lUrlVal, fId, uTId);
    }
    else if (lUrlTitle == "Delete") {
        deleteDialog(lUrlVal, fId, uTId);
    }
    else if (lUrlTitle = "Details") {
        detailsDialog(lUrlVal);
    }
    else {
        return;
    }

}

//For Add
function addDialog(linkUrlRel, linkUrlVal, formId, updateTargetId) {

    if ($('#appAddDialog').length == 0) {
        $(document.body).append('<div id="appAddDialog" title="Add"></div>');
    } else {
        $('#appAddDialog').html('');
    }

    var lUrlVal = linkUrlVal;
    var fId = "#" + formId;
    var uTId = "#" + updateTargetId;

    $("#appAddDialog").dialog({
        width: 600,
        resizable: false,
        modal: true,
        buttons: {
            "Add": function () {
                //make sure there is nothing on the message before we continue 
                $(uTId).html('');
                $(fId).submit();
                //alert("Add");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    $.get(lUrlVal, function (data) {
        $("#appAddDialog").html(data);
        //validation
        var $form = $(fId);
        // Unbind existing validation
        $form.unbind();
        $form.data("validator", null);
        // Check document for changes
        $.validator.unobtrusive.parse(document);
        // Re add validation with changes
        $form.validate($form.data("unobtrusiveValidation").options);
        //open dialog
        $("#appAddDialog").dialog('open');
    });

    return;

}

//For Edit
function editDialog(linkUrlRel, linkUrlVal, formId, updateTargetId) {

    if ($('#appEditDialog').length == 0) {
        $(document.body).append('<div id="appEditDialog" title="Edit"></div>');
    } else {
        $('#appEditDialog').html('');
    }

    var lUrlVal = linkUrlVal;
    var fId = "#" + formId;
    var uTId = "#" + updateTargetId;

    $("#appEditDialog").dialog({
        width: 600,
        resizable: false,
        modal: true,
        buttons: {
            "Edit": function () {
                //make sure there is nothing on the message before we continue 
                $(uTId).html('');
                $(fId).submit();
                //alert("Edit");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    $.get(lUrlVal, function (data) {
        $("#appEditDialog").html(data);
        //validation
        var $form = $(fId);
        // Unbind existing validation
        $form.unbind();
        $form.data("validator", null);
        // Check document for changes
        $.validator.unobtrusive.parse(document);
        // Re add validation with changes
        $form.validate($form.data("unobtrusiveValidation").options);
        //open dialog
        $("#appEditDialog").dialog('open');
    });

    return;
}

//For Delete
function deleteDialog(linkUrlRel, linkUrlVal, formId, updateTargetId) {

    if ($('#appDeleteDialog').length == 0) {
        $(document.body).append('<div id="appDeleteDialog" title="Delete"></div>');
    } else {
        $('#appDeleteDialog').html('');
    }

    var lUrlVal = linkUrlVal;
    var fId = "#" + formId;
    var uTId = "#" + updateTargetId;

    $("#appDeleteDialog").dialog({
        width: 600,
        resizable: false,
        modal: true,
        buttons: {
            "Yes": function () {
                //make sure there is nothing on the message before we continue 
                $(uTId).html('');
                $(fId).submit();
                //alert("Delete");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    $.get(lUrlVal, function (data) {
        $("#appDeleteDialog").html(data);
        //validation
        var $form = $(fId);
        // Unbind existing validation
        $form.unbind();
        $form.data("validator", null);
        // Check document for changes
        $.validator.unobtrusive.parse(document);
        // Re add validation with changes
        $form.validate($form.data("unobtrusiveValidation").options);
        //open dialog
        $("#appDeleteDialog").dialog('open');
    });

    return;
}

//For Details
function detailsDialog(linkUrlRel, linkUrlVal) {

    if ($('#appDetailsDialog').length == 0) {
        $(document.body).append('<div id="appDetailsDialog" title="Details"></div>');
    } else {
        $('#appDetailsDialog').html('');
    }

    var lUrlVal = linkUrlVal;

    $("#appDetailsDialog").dialog({
        autoOpen: false,
        width: 500,
        resizable: false,
        modal: true,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    $.get(lUrlVal, function (data) {
        $("#appDetailsDialog").html(data);
        $("#appDetailsDialog").dialog('open');
    });

    return;
}

//end Create Dialog Dynamical
//-----------------------------------------------------

var catObjData;

$(function () {
    //start DataTable Script

    //for display more collapse data from product
    $('#categoryDataTable tbody td img.catPro').live('click', function () {

        if ($(this).attr('class').match('catPro')) {
            var nTr = this.parentNode.parentNode;
            if (this.src.match('details_close')) {
                this.src = "/Content/Images/App/details_open.png";
                catObjData.fnClose(nTr);
            }
            else {
                this.src = "/Content/Images/App/details_close.png";
                var catid = $(this).attr("rel");
                $.get("/Optimize/GetProducts?catId=" + catid, function (products) {
                    catObjData.fnOpen(nTr, products, 'details');
                });
            }
        }

    });

    catObjData = $('#categoryDataTable').dataTable({
        "bJQueryUI": true,
        "bAutoWidth": false,
        "sPaginationType": "full_numbers",
        "bSort": false,
        "oLanguage": {
            "sLengthMenu": "Display _MENU_ records per page",
            "sZeroRecords": "Nothing found - Sorry",
            "sInfo": "Showing _START_ to _END_ of _TOTAL_ records",
            "sInfoEmpty": "Showing 0 to 0 of 0 records",
            "sInfoFiltered": "(filtered from _MAX_ total records)"
        },
        "bProcessing": true,
        "bServerSide": true,
        "sAjaxSource": "/Optimize/GetCategories",
        "aoColumns": [{ "sName": "ID",
            "bSearchable": false,
            "bSortable": false,
            "fnRender": function (oObj) {
                return '<img class="catPro img-expand-collapse" src="/Content/Images/App/details_open.png" title="Product List" alt="expand/collapse" rel="' +
                                oObj.aData[0] + '"/>' +
                                '<a class="lnkDialog" title="Details" rel="Category" href=\"/Optimize/Details/' +
                                oObj.aData[0] + '\" ><img src="/Content/Images/App/detail.png" title="Details" class="tb-space" alt="Detail"></a>' +
                                '<a class="lnkDialog" title="Edit" rel="Category" form="editForm" href=\"/Optimize/Edit/' +
                                oObj.aData[0] + '\" ><img src="/Content/Images/App/edit.png" title="Edit" class="tb-space" alt="Edit"></a>' +
                                '<a class="lnkDialog" title="Delete" rel="Category" form="deleteForm" href=\"/Optimize/Delete/' +
                                oObj.aData[0] + '\" ><img src="/Content/Images/App/delete.png" title="Delete" class="tb-space" alt="Delete"></a>';

            }

        },
                          { "sName": "CATEGORYNAME" }
            ]
    });

    //end DataTable Script

    //-------------------------------------------------------
    //start Add, Edit, Delete - Dialog Open Dynamical, Click Event

    //add, edit, delete Category
    $('.lnkDialog').live('click', function () {

        //change the title of the dialog
        var linkObj = $(this);
        var linkUrlVal = linkObj.attr('href');
        var linkUrlTitle = linkObj.attr('title');
        var linkUrlRel = linkObj.attr('rel');
        var linkUrlFormId = linkObj.attr('form');
        var updateTargetId = 'updateTargetId';

        // Create Dialog
        //createDialogWithParam(linkUrlVal, linkUrlTitle, linkUrlFormId, updateTargetId);
        createDialogWithLnkObj(linkObj);

        return false;

    });

    //end Add, Edit, Delete - Dialog Open Dynamical, Click Event
    //-------------------------------------------------------

});