module.exports = {

    register: (req, res) => {
        const db = req.app.get('db');
        let { username, password } = req.body;
        
        db.create_user([ username, password ])
            .then(user => res.status(200).send(user))
            .catch( err => {
                console.log(err)
                res.status(500).send(err);
            })
    },

    login: (req, res) => {
        const db = req.app.get('db');
        let { username, password } = req.body;

        db.login_user([ username, password ])
            .then(user => res.status(200).send(user))
            .catch( err => {
                console.log(err)
                res.status(500).send(err);
            })
    },
    
        getAllPosts: (req, res) => {
            const db = req.app.get('db');
    
            db.get_posts()
            .then(posts => res.status(200).send(posts))    .catch((err) => {
            console.log(err)
            res.status(500).send(err);
            })
        },

        addNewPost: (req, res) => {
            const db = req.app.get('db');
            const { title, username, content } = req.body
            
            db.add_new_post([title, username, content])
            .then(posts => res.status(200).send(posts))
            .catch((err) => console.log(err))
        },

        deletePost: (req, res) => {
            const db = req.app.get('db');
            const id = req.params.id;
    
            db.delete_post([id])
                .then(posts => res.status(200).send(posts))
                .catch((err) => res.status(500).send(err))
        },

        editPost: (req, res) => {
            const db = req.app.get('db');
            const id = req.params.id;
            const { title, username, content } = req.body
    
            console.log(res.data)
    
            db.edit_post([id, title, username, content])
                .then(posts => res.status(200).send(posts))
                .catch((err) => res.status(500).send(err))
        },

        search: (req, res) => {
        const db = req.app.get('db');
        const { username } = req.query;

        db.join_for_search([ username ])
                .then(posts => res.status(200).send(posts))
                .catch((err) => res.status(500).send(err))
        }
}