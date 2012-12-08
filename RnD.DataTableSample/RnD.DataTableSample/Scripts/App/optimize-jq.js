//-----------------------------------------------------
//start Add, Edit, Delete - Success Funtion
// Add Category Success Function
function AddCategorySuccess() {
    alert("AddCategorySuccess");
    if ($("#addCategoryMess").html() == "True") {

        //now we can close the dialog
        $('#addCategoryDialog').dialog('close');
        //twitter type notification
        $('#commonMessage').html("Category Added.");
        $('#commonMessage').delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $("#addCategoryMess").show();
    }
}

// Edit Category Success Function
function EditCategorySuccess() {
    if ($("#editCategoryMess").html() == "True") {

        //now we can close the dialog
        $('#editCategoryDialog').dialog('close');
        //twitter type notification
        $('#commonMessage').html("Category Updated.");
        $('#commonMessage').delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $("#editCategoryMess").show();
    }
}

// Delete Category Success Function
function DeleteCategorySuccess() {
    if ($("#deleteCategoryMess").html() == "True") {

        //now we can close the dialog
        $('#deleteCategoryDailog').dialog('close');
        //twitter type notification
        $('#commonMessage').html("Task deleted");
        $('#commonMessage').delay(400).slideDown(400).delay(3000).slideUp(400);

        catObjData.fnDraw();

    }
    else {
        //show message in popup
        $("#deleteCategoryMess").show();
    }
}
//end Add, Edit, Delete - Success Funtion
//-----------------------------------------------------

//-----------------------------------------------------
//start Add, Edit, Delete - Success Common Funtion
function AjaxSuccess(updateTargetId, dailogId, commonMessageId, commonMessage) {

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
//start Create Dialog Dynamical
function createDialog(linkUrlVal, linkUrlTitle, formId, updateTargetId) {

    var lUrlVal = linkUrlVal;
    var lUrlTitle = linkUrlTitle;
    var fId = formId;
    var uTId = updateTargetId;

    alert(lUrlVal);
    alert(lUrlTitle);
    alert(fId);
    alert(uTId);

    if (lUrlTitle == "Add") {
        alert(lUrlTitle);
        addDialog(lUrlVal, fId, uTId);
    }
    else if (lUrlTitle == "Edit") {
        alert(lUrlTitle);
        editDialog(lUrlVal, fId, uTId);
    }
    else if (lUrlTitle == "Delete") {
        alert(lUrlTitle);
        deleteDialog(lUrlVal, fId, uTId);
    }
    else if (lUrlTitle = "Details") {
        alert(lUrlTitle);
        delailsDialog(lUrlVal);
    }

}

//For Add
function addDialog(linkUrlVal, formId, updateTargetId) {

    $(document.body).append('<div id="appAddDialog"></div>');

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

}

//For Edit
function editDialog(linkUrlVal, formId, updateTargetId) {

    $(document.body).append('<div id="appEditDialog"></div>');

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
                alert("Edit");
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

}

//For Delete
function deleteDialog(linkUrlVal, formId, updateTargetId) {

    $(document.body).append('<div id="appDeleteDialog"></div>');

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
                alert("Delete");
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

}

//For Details
function delailsDialog(linkUrlVal) {

    $(document.body).append('<div id="appDetailsDialog"></div>');

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

}

//end Create Dialog Dynamical
//-----------------------------------------------------

var linkObj;

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
                $.get("/Category/GetProducts?catId=" + catid, function (products) {
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
        "sAjaxSource": "/Category/GetCategories",
        "aoColumns": [{ "sName": "ID",
            "bSearchable": false,
            "bSortable": false,
            "fnRender": function (oObj) {
                return '<img class="catPro img-expand-collapse" src="/Content/Images/App/details_open.png" title="Product List" alt="expand/collapse" rel="' +
                                oObj.aData[0] + '"/>' +
                                '<a class="lnkDialog" title="Details" href=\"/Category/Details/' +
                                oObj.aData[0] + '\" ><img src="/Content/Images/App/detail.png" title="Details" class="tb-space" alt="Detail"></a>' +
                                '<a class="lnkDialog" title="Edit" form="editForm" href=\"/Category/Edit/' +
                                oObj.aData[0] + '\" ><img src="/Content/Images/App/edit.png" title="Edit" class="tb-space" alt="Edit"></a>' +
                                '<a class="lnkDialog" title="Delete" form="deleteForm" href=\"/Category/Delete/' +
                                oObj.aData[0] + '\" ><img src="/Content/Images/App/delete.png" title="Delete" class="tb-space" alt="Delete"></a>';

            }

        },
                          { "sName": "CATEGORYNAME" }
            ]
    });

    //end DataTable Script

    //-------------------------------------------------------
    //start Add, Edit, Delete - Dialog Open Dynamical, Click Event

    //add Category
    $('#categoryDataTable tbody td a.lnkDialog').live('click', function () {

        alert("Hello");

        //change the title of the dialog
        linkObj = $(this);
        var linkUrlVal = linkObj.attr('href');
        var linkUrlTitle = linkObj.attr('title');
        var linkUrlFormId = linkObj.attr('form');
        var updateTargetId = 'updateTargetId';

        // Create Dialog
        createDialog(linkUrlVal, linkUrlTitle, linkUrlFormId, updateTargetId);

        return false;

    });

    //end Add, Edit, Delete - Dialog Open Dynamical, Click Event
    //-------------------------------------------------------

    //-------------------------------------------------------
    //start Add, Edit, Delete - Dialog, Click Event

    $("#addCategoryDialog").dialog({
        autoOpen: false,
        width: 600,
        resizable: false,
        modal: true,
        buttons: {
            "Add": function () {
                //make sure there is nothing on the message before we continue 
                $("#addCategoryMess").html('');
                $("#addCategoryForm").submit();
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    //add Category
    $('.lnkAddCategory').click(function () {

        //change the title of the dialog
        linkObj = $(this);
        var dialogDiv = $('#addCategoryDialog');
        var linkUrlVal = linkObj.attr('href');

        $.get(linkUrlVal, function (data) {
            dialogDiv.html(data);
            //validation
            var $form = $("#addCategoryForm");
            // Unbind existing validation
            $form.unbind();
            $form.data("validator", null);
            // Check document for changes
            $.validator.unobtrusive.parse(document);
            // Re add validation with changes
            $form.validate($form.data("unobtrusiveValidation").options);
            //open dialog
            dialogDiv.dialog('open');
        });
        return false;

    });

    //edit Category
    $("#editCategoryDialog").dialog({
        autoOpen: false,
        width: 600,
        resizable: false,
        closeOnEscape: false,
        modal: true,
        close: function (event, ui) {
            $(".popover").hide();
        },
        buttons: {
            "Edit": function () {
                //make sure there is nothing on the message before we continue   
                $("#editCategoryMess").html('');
                $("#editCategoryForm").submit();
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }

    });

    $('#categoryDataTable tbody td a.lnkEditCategory').live('click', function () {

        //change the title of the dialog
        linkObj = $(this);
        var dialogDiv = $('#editCategoryDialog');
        var linkUrlVal = linkObj.attr('href');
        $.get(linkUrlVal, function (data) {
            dialogDiv.html(data);
            //validation
            var $form = $("#editCategoryForm");
            // Unbind existing validation
            $form.unbind();
            $form.data("validator", null);
            // Check document for changes
            $.validator.unobtrusive.parse(document);
            // Re add validation with changes
            $form.validate($form.data("unobtrusiveValidation").options);
            //open dialog
            dialogDiv.dialog('open');
        });
        return false;

    });

    //delete Category
    $("#deleteCategoryDailog").dialog({
        autoOpen: false,
        width: 600,
        resizable: false,
        modal: true,
        buttons: {
            "Yes": function () {
                //make sure there is nothing on the message before we continue                         
                $("#deleteCategoryMess").html('');
                $("#deleteCategoryForm").submit();
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    $('#categoryDataTable tbody td a.lnkDeleteCategory').live('click', function () {

        //change the title of the dialog
        linkObj = $(this);
        var dialogDiv = $('#deleteCategoryDailog');
        var linkUrlVal = linkObj.attr('href');
        $.get(linkUrlVal, function (data) {
            dialogDiv.html(data);
            //validation
            var $form = $("#deleteCategoryForm");
            // Unbind existing validation
            $form.unbind();
            $form.data("validator", null);
            // Check document for changes
            $.validator.unobtrusive.parse(document);
            // Re add validation with changes
            $form.validate($form.data("unobtrusiveValidation").options);
            //open dialog
            dialogDiv.dialog('open');
        });
        return false;

    });

    //For details Category
    $("#detailsCategoryDialog").dialog({
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

    $('#categoryDataTable tbody td a.lnkDetailsCategory').live('click', function () {

        linkObj = $(this);
        var dialogDiv = $('#detailsCategoryDialog');
        var linkUrlVal = linkObj.attr('href');
        $.get(linkUrlVal, function (data) {
            dialogDiv.html(data);
            dialogDiv.dialog('open');
        });
        return false;

    });

    //end Add, Edit, Delete - Dialog, Click Event
    //-------------------------------------------------------

});