

export default function ProjectSummary({project}){
    return(
        <div className="border rounded-md m-3 p-1 text-center">
            <h4>{project.projectDetails.name}</h4>
        </div>
    )
}