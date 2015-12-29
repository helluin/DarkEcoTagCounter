var results = [];

var dataObj = [
    {
        "FIELD1": "Focus Areas",
        "FIELD2": "Project Name"
  },
    {
        "FIELD1": " WaterwayUses Community ScienceAndTech Stewardship",
        "FIELD2": "Plus Pool"
  },
    {
        "FIELD1": "Interspecies Pollution BetweenLandAndRiver Stewardship ScienceAndTech Water ",
        "FIELD2": "Amphibious Architectures"
  },
    {
        "FIELD1": "Waste Pollution  WaterwayUses Economics Wilderness LandUse",
        "FIELD2": "Back Water"
  },
    {
        "FIELD1": "Biodiversity Interspecies Education Stewardship Remediation SoftEdges ScienceAndTech  WaterwayUses",
        "FIELD2": "Billion Oyster Project"
  },
    {
        "FIELD1": "Remediation ClimateChange Mindfulness Community Education Pollution Stewardship Soil Race Class",
        "FIELD2": "Bioremediation at The Sanctuary"
  },
    {
        "FIELD1": "Biodiversity Pollution Interspecies  WaterwayUses Water",
        "FIELD2": "Breathing Space for the Hudson"
  },
    {
        "FIELD1": "Pollution  WaterwayUses ScienceAndTech Community Water Stewardship Education",
        "FIELD2": "Brooklyn Atlantis"
  },
    {
        "FIELD1": "Community Education Collapse Stewardship Transportation  WaterwayUses BetweenLandAndRiver",
        "FIELD2": "Citizen Bridge"
  },
    {
        "FIELD1": "ClimateChange Economics Media Collapse Media Mindfulness Post-Humanism Stewardship Time Weather ",
        "FIELD2": "Dear Climate"
  },
    {
        "FIELD1": "Class Collapse Economics Education FoodSystem Justice Media Pollution Post-Humanism Race Stewardship SustainableBehavior ScienceAndTech Waste Politics",
        "FIELD2": "Discard Studies"
  },
    {
        "FIELD1": "SoftEdges Biodiversity Remediation Community GreenInfrastructure Interspecies Pollution QualityOfLife Class Race Stewardship ScienceAndTech  WaterwayUses Water Economics Justice BetweenLandAndRiver",
        "FIELD2": "English Kills Project"
  },
    {
        "FIELD1": "Interspecies Community Biodiversity Soil ScienceAndTech ",
        "FIELD2": "Field Guide to the Electric Underground"
  },
    {
        "FIELD1": "ClimateChange Time Biodiversity History",
        "FIELD2": "Gaia��s Body: Toward a Physiology of Earth"
  },
    {
        "FIELD1": "History Time LandUse Post-Humanism",
        "FIELD2": "GEOLOGIC CITY: A FIELD GUIDE TO THE GEOARCHITECTURE OF NEW YORK"
  },
    {
        "FIELD1": "Water Education Community SustainableBehavior Stewardship Water Waste",
        "FIELD2": "Go with the Flow"
  },
    {
        "FIELD1": "Community Water  WaterwayUses BetweenLandAndRiver Pollution ScienceAndTech Biodiversity Policy",
        "FIELD2": "Gowanus Low Altitude Mapping"
  },
    {
        "FIELD1": "GreenInfrastructure  WaterwayUses Waste Policy ClimateChange Community Stewardship",
        "FIELD2": "Green Infrastructure Planning Map"
  },
    {
        "FIELD1": "Education Collapse Waste Pollution Water Weather Media SustainableBehavior",
        "FIELD2": "H20 Oh No!"
  },
    {
        "FIELD1": "ClimateChange Policy Education Collapse Stewardship Community",
        "FIELD2": "HighWaterLine"
  },
    {
        "FIELD1": "Community Politics SustainableBehavior Media",
        "FIELD2": "Is Shame Necessary?"
  },
    {
        "FIELD1": "FoodSystem SocialPractice Community Agriculture",
        "FIELD2": "La Casita Verde NYC"
  },
    {
        "FIELD1": "Media Water Community Race Class Gender Collapse ClimateChange Politics Global Justice",
        "FIELD2": "Last Call at the Oasis"
  },
    {
        "FIELD1": "WaterwayRights Transportation Community",
        "FIELD2": "Liquid City"
  },
    {
        "FIELD1": "Community SustainableBehavior LandUse QualityOfLife",
        "FIELD2": "Manuals for Public Space"
  },
    {
        "FIELD1": " WaterwayUses GreyInfrastructure LandUse Pollution Policy Remediation",
        "FIELD2": "Newtown Creek Brownfield Opportunity Area"
  },
    {
        "FIELD1": "Waste GreyInfrastructure",
        "FIELD2": "Newtown Creek Digester Eggs"
  },
    {
        "FIELD1": "ScienceAndTech Community BetweenLandAndRiver  WaterwayUses Pollution",
        "FIELD2": "Newtown Creek Monitoring Project"
  },
    {
        "FIELD1": "Community Education  WaterwayUses Collapse History BetweenLandAndRiver GreenInfrastructure GreyInfrastructure Biodiversity Waste Stewardship",
        "FIELD2": "Newtown Creek Nature Walk"
  },
    {
        "FIELD1": "Waste  WaterwayUses Pollution Time",
        "FIELD2": "Newtown Nets"
  },
    {
        "FIELD1": "FoodSystem ClimateChange Policy Community SustainableBehavior  Economics",
        "FIELD2": "No Free Lunch"
  },
    {
        "FIELD1": "Biodiversity Interspecies Stewardship QualityOfLife Health Wilderness",
        "FIELD2": "Ooz"
  },
    {
        "FIELD1": "Community Education  WaterwayUses History QualityOfLife GreenInfrastructure Stewardship",
        "FIELD2": "Partnerships for Parks"
  },
    {
        "FIELD1": "LandUse Soil Biodiversity SustainableBehavior Pollution Health Education",
        "FIELD2": "Perfect Earth Project"
  },
    {
        "FIELD1": "ClimateChange FoodSystem SustainableBehavior Stewardship Education GreenInfrastructure Community QualityOfLife ",
        "FIELD2": "S.O.S. Action Guide"
  },
    {
        "FIELD1": " WaterwayUses ClimateChange Waste Politics Collapse Race Class SustainableBehavior Community Biodiversity Energy Media",
        "FIELD2": "Sea Change: We All Live Downstream"
  },
    {
        "FIELD1": "ScienceAndTech ClimateChange SustainableBehaviors BetweenLandAndRiver LandUse Economics WaterwayUses Waste ShippingAndMovementOfGoods Weather",
        "FIELD2": "SUPER DOCKING"
  },
    {
        "FIELD1": "History LandUse Media  WaterwayUses",
        "FIELD2": "The Newtown Pentacle"
  },
    {
        "FIELD1": "Media ClimateChange Politics",
        "FIELD2": "The Yes Men Are Revolting"
  },
    {
        "FIELD1": " WaterwayUses Class Transportation Economics Stewardship History Pollution",
        "FIELD2": "Tide and Current Water Taxi"
  },
    {
        "FIELD1": "FoodSystem Biodiversity Agriculture Economics ScienceAndTech ",
        "FIELD2": "Tree of 40 Fruit"
  },
    {
        "FIELD1": "Water  WaterwayUses History Community Stewardship",
        "FIELD2": "Underwater New York"
  },
    {
        "FIELD1": "FoodSystem Waste SustainableBehaviors",
        "FIELD2": "WastED"
  }
];

console.log(dataObj.length);

var listProjects = function () {
    for (var i = 0; i < dataObj.length; i++) {

        if (dataObj[i].FIELD1.indexOf( "Economics") != -1) {
            results.push(dataObj[i].FIELD2);
            $(".container").append("<p>" + dataObj[i].FIELD2 + "</p>");
            
        }

    }
};

console.log(results);



$(document).ready(function(){
    
    listProjects(); 
})