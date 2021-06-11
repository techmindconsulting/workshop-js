class Worker extends Employee {
    constructor(
        fullname = "",
        email = "",
        department = "common",
        projects = [],
        skills = ["Communication", "Teamwork", "Adaptability", "Work Ethic", "Time Management"]
    ) {
        super(fullname, email, department);
        this.projects = [];
        this.skills = skills;
    }

    addSkill(skill) {
        this.skills.push(skill);
    }

    setProjects(projects) {
        this.projects = projects;
    }

    addProject(project) {
        this.projects.push(project);
    }

    get manager() {
        return this._manager;
    }
    /**
     * @param {Manager} value
     */
    set manager(value) {
        if (value instanceof Manager) {
            this._manager = value;
        }
    }

    hasManager() {
        return this._manager instanceof Manager;
    }
}
