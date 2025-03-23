

export default function ProjectForm(){
    return(
        <div>
            <form action="">
                <label htmlFor="name">Project name:</label>
                <input type="text" name="name" id="name" required/>

                <label htmlFor="madeFor">Made for:</label>
                <input type="text" name="made_for" id="madeFor" />

                <label htmlFor="started">Date started:</label>
                <p>Will default to today's date if unset</p>
                <input type="date" name="started" id="started" />

                <label htmlFor="completed">Date completed:</label>
                <input type="date" name="completed" id="completed" />

                <label htmlFor="notes">Notes:</label>
                <textarea name="notes" id="notes"></textarea>

                <input type="checkbox" name="saveToRavelry" id="saveToRavelry" />
                <label htmlFor="saveToRavelry">Save to Ravelry</label>

                <button type="submit">Save</button>

            </form>
        </div>
    )
}