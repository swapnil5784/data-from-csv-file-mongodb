const indexEvents = function () {
    this.init = function () {
        _this.uploadCsv();
    }

    this.uploadCsv = function () {
        $("#upload").on('click', function () {
            console.log($("#csvUpload").val())
        })
    }
    const _this = this
    this.init()
}