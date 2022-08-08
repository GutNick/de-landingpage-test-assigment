export default class FetchFromData {
    constructor(url) {
        this._url = url;
    }

    _handleRes(res) {
        if (res.ok) {
            return res.json();
        }
        return res.json()
            .then((err) => {
                const error = new Error(err.message);
                error.status = res.status;
                throw error;
            })
    }

    fetchToServer ({data}) {
        return fetch(this._url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data}),
        })
            .then(this._handleRes)
    }
}
