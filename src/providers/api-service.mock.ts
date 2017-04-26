import { Observable } from "rxjs/Observable";

export const MockCompanies = [
    {
        "id": 1,
        "name": "Hackett, Treutel and Hartmann",
        "description": "facilitate sexy supply-chains",
        "logo_url": "https://example1.jpg",
        "website_url": "http://cristnienow.info/alyon",
        "created_at": "2015-02-12T19:01:34.529Z",
        "updated_at": "2015-02-12T19:01:34.529Z"
    },
    {
        "id": 2,
        "name": "Huels, Walsh and Lakin",
        "description": "unleash compelling systems",
        "logo_url": "https://example2.jpg",
        "website_url": "http://prohaskajast.name/benton",
        "created_at": "2015-02-12T19:01:36.726Z",
        "updated_at": "2015-02-12T19:01:36.726Z"
    },
    {
        "id": 3,
        "name": "Walker Group",
        "description": "optimize sexy architectures",
        "logo_url": "https://example3.jpg",
        "website_url": "http://runolfonoconner.biz/marcos_mckenzie",
        "created_at": "2015-02-12T19:01:38.207Z",
        "updated_at": "2015-02-12T19:01:38.207Z"
    }
];

export class ApiServiceStub {
    findAll() {
        return Observable.from(MockCompanies);
    }
}