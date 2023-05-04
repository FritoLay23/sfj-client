function GamesAdd() {
    return (
      <>
        <h1>Upload</h1>
        <form action="" method="POST" >
            <input type="file" name="image"/>
            <input type="text" name="type" placeholder="Type"/>
            <input type="text" name="branch" placeholder="branch"/>
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="description" placeholder="Description"/>
            <input type="text" name="question" placeholder="question"/>
            <input type="text" name="answer" placeholder="answer"/>
            <input type="text" name="incorrect" placeholder="incorrect"/>
            <input type="text" name="value" placeholder="value"/>
            <input type="text" name="updated" placeholder="updated"/>
            <button type="submit">
                Upload
            </button>
        </form>
      </>
    );
  }
  export default GamesAdd;