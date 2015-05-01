$("a[title='Parenthetical']").on("click", function() {
    $("<blockquote/>").insertBefore($("[contenteditable]").find("p:first")).append($("[contenteditable]").find("p"))
});