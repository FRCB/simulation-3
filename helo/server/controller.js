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
    
    // getAllPosts: (req, res) => {
    //         const db = req.app.get('db');
    
    //         db.get_posts()
    //             .then(posts => res.status(200).send(posts))
    //             .catch((err) => {
    //                 console.log(err)
    //                 res.status(500).send(err);
    //         })
    //     }
    }