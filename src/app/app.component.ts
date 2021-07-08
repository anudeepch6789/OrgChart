import { Component, OnInit } from '@angular/core';
import {  Diagram, ConnectorModel, Node, DataBinding, HierarchicalTree, TreeInfo  } from '@syncfusion/ej2-diagrams';
  Diagram.Inject(DataBinding, HierarchicalTree);
  
  import {  DataManager,  Query  } from '@syncfusion/ej2-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'hello-angular9';

  ngOnInit(){

    let data : object[] =  [{
        Id: "parent",
        Role: "Project Management"
    },
        {
            Id: 1,
            Role: "R&D Team",
            Team: "parent"
            // imageUrl :
        },
        {
            Id: 3,
            Role: "Philosophy",
            Team: "1"
        },
        {
            Id: 4,
            Role: "Organization",
            Team: "1"
        },
        {
            Id: 5,
            Role: "Technology",
            Team: "1"
        },
        {
            Id: 7,
            Role: "Funding",
            Team: "1"
        },
        {
            Id: 8,
            Role: "Resource Allocation",
            Team: "1"
        },
        {
            Id: 9,
            Role: "Targeting",
            Team: "1"
        },
        {
            Id: 11,
            Role: "Evaluation",
            Team: "1"
        },
        {
            Id: 156,
            Role: "HR Team",
            Team: "parent"
        },
        {
            Id: 13,
            Role: "Recruitment",
            Team: "156"
        },
        {
            Id: 113,
            Role: "Training",
            Team: "12"
        },
        {
            Id: 112,
            Role: "Employee Relation",
            Team: "156"
        },
        {
            Id: 14,
            Role: "Record Keeping",
            Team: "12"
        },
        {
            Id: 15,
            Role: "Compensations & Benefits",
            Team: "12"
        },
        {
            Id: 16,
            Role: "Compliances",
            Team: "12"
        },
        {
            Id: 17,
            Role: "Production & Sales Team",
            Team: "parent"
        },
        {
            Id: 119,
            Role: "Design",
            Team: "17"
        },
        {
            Id: 19,
            Role: "Operation",
            Team: "17"
        },
        {
            Id: 20,
            Role: "Support",
            Team: "17"
        },
        {
            Id: 21,
            Role: "Quality Assurance",
            Team: "17"
        },
        {
            Id: 23,
            Role: "Customer Interaction",
            Team: "17"
        },
        {
            Id: 24,
            Role: "Support and Maintenance",
            Team: "17"
        },
        {
            Id: 25,
            Role: "Task Coordination",
            Team: "17"
        },
        {
            Id:26,
            Role:"heyy",
            Team:"3"
        },
        {
            Id:27,
            Role:"hey",
            Team:"4"
        },
        {
            Id:28,
            Role:"he213yy",
            Team:"4"
        }
    ];

  //Initializes data source
//   let data: object[] = [{
//     Id: 1,
//     Role: "General Manager"
// },
// {
//     Id: 2,
//     Role: "Assistant Manager",
//     Team: 1
// },
// {
//     Id: 3,
//     Role: "Human Resource Manager",
//     Team: 1
// },
// {
//     Id: 4,
//     Role: "Design Manager",
//     Team: 1
// },
// {
//     Id: 5,
//     Role: "Operation Manager",
//     Team: 1
// },
// {
//     Id: 6,
//     Role: "Marketing Manager",
//     Team: 1
// }
// ];

let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

let diagram: Diagram = new Diagram({
width: '100%',
height: '530px',
snapSettings: {
    constraints: 0
},//Uses layout to auto-arrange nodes on the Diagram page
layout: {
    //Sets layout type
    type: 'OrganizationalChart',
    getLayoutInfo: (node: Node, options: TreeInfo) => {
        if (!options.hasSubTree) {
            options.type = 'Alternate';
            options.orientation = 'Vertical';
        }
    }
},//Configures data source for Diagram
dataSourceSettings: {
    id: 'Id',
    parentId: 'Team',
    dataManager: items
},
//Sets the default properties for nodes and connectors
getNodeDefaults: (obj: Node, diagram: Diagram) => {
    obj.width = 100;
    obj.height = 40;
    obj.style.fill = '#6BA5D7';
    obj.annotations = [{
        content: obj.data['Role'],
        style: {
            color: 'blue'
        }
    }];
    return obj;
},
getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
    connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2
    };
    connector.targetDecorator.style.fill  =  '#6BA5D7';
    connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
    connector.targetDecorator.shape = 'None';
    connector.targetDecorator.shape = 'None';
    connector.type = 'Orthogonal';
    return connector;
}
});
console.log(diagram,"heloooooooooooooooooooo");
diagram.appendTo('#element');

  }
}


  
