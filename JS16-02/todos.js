 var CountDoneTasks = 0
        var Arr = []


        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(todos => {
                todos.forEach(t => {

                    var obj = {
                        id: 0,
                        titlelen: 0
                    }
                    obj.id = t.id
                    obj.titlelen = t.title.length
                    Arr.push(obj)

                    if (t.completed) {
                        // console.log(t.completed)
                        CountDoneTasks++;
                    }
                    if (t.title.length > 20) {
                        console.log(t.title)
                    }
                })
                console.log(CountDoneTasks)
            }

            )



        console.log(Arr)