using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FreightsController : ControllerBase
    {
        private ICollection<Freight> _freights;
        public FreightsController()
        {
            _freights = GetFreights();
        }

        [HttpGet]
        public IEnumerable<Freight> Get()
        {
            Task.Delay(250);
            return _freights;
        }

        [HttpGet("{id}")]
        public Freight Get(int id)
        {
            Task.Delay(250);
            return _freights.Where(a => a.Id == id).FirstOrDefault();
        }

        [HttpPost]
        public Freight Post(Freight freight)
        {
            Task.Delay(250);
            freight.Id = _freights.Count() + 1;
            _freights.Add(freight);
            return freight;
        }


        [HttpPut("{id}")]
        public ActionResult Put(Freight freight)
        {
            Task.Delay(250);
            var freightToUpdate = _freights.FirstOrDefault(a => a.Id == freight.Id);
            if (freightToUpdate != null)
            {
                freightToUpdate = freight;
            }
            else{
              return NotFound();
            }
            return Ok(freight);
        }

        private ICollection<Freight> GetFreights()
        {
            return new List<Freight>(){
                new Freight(){
                    Id = 1,
                    Description = "First row from collection",
                    Name = "Row #1",
                    Type = FreightType.WalkingFloor,
                    ValidTo = new DateTime(2020,02,20),
                    UserId = 1,
                    Destination = new AddressDetails(){
                        Country= "PL",
                        PostCode= "40-000",
                        Addres1= "Jana Pawła 2",
                        Addres2= "12/2",
                        Description= "Za figuro w prawo"
                    },
                    Source = new AddressDetails(){
                        Country= "DE",
                        PostCode= "1239F",
                        Addres1= "RazingerStrasse",
                        Addres2= "5",
                        Description= ""
                    }
                },
                new Freight(){
                    Id= 2,
                    Description= "Second row from collection",
                    Name= "Row #2",
                    Type= FreightType.Cooler,
                    ValidTo= new DateTime(2010, 1, 5),
                    UserId= 1,
                    Destination= new AddressDetails() {
                      Country= "NO",
                      PostCode= "2608",
                      Addres1= "Lillehammer",
                      Addres2= "Ravnumsvegen 4",
                      Description= ""
                    },
                    Source = new AddressDetails() {
                      Country= "RU",
                      PostCode= "1239F",
                      Addres1= "Moscow Oblast",
                      Addres2= "Davydovskoye 25a",
                      Description= "Shinomontazh"
                    }
                },
                new Freight(){
                    Id= 3,
                    Description= "Third row from collection",
                    Name= "Row #3",
                    Type= FreightType.Isotherm,
                    ValidTo= new DateTime(2025, 7, 16),
                    UserId= 2,
                    Destination= new AddressDetails() {
                      Country= "IT",
                      PostCode= "67035",
                      Addres1= "Pratola Peligna",
                      Addres2= "Jana Pawła 2 12/2",
                      Description= "Carducci & D'Andrea"
                    },
                    Source = new AddressDetails() {
                      Country= "UA",
                      PostCode= "87500",
                      Addres1= "Donetsk",
                      Addres2= "Karpova Ave 14",
                      Description= ""
                    }
                },
                new Freight(){
                    Id= 4,
                    Description= "Name it as you want",
                    Name= "Another freight",
                    Type= FreightType.DumpTruck,
                    ValidTo= new DateTime(2025, 7, 16),
                    UserId= 2,
                    Destination = new AddressDetails() {
                      Country= "SK",
                      PostCode= "841 06",
                      Addres1= "Záhorská Bystrica",
                      Addres2= "Na Holom vrchu 12",
                      Description= ""
                    },
                    Source = new AddressDetails() {
                      Country= "CZ",
                      PostCode= "360 20",
                      Addres1= "Drahovice",
                      Addres2= "Krokova 339/37",
                      Description= "Autoškola Jan Duspiva"
                    }
                },
                new Freight(){
                    Id= 5,
                    Description= "I'm runing out of description ideas ;)",
                    Name= "Yet another freight",
                    Type= FreightType.Curtainsider,
                    ValidTo= new DateTime(2025, 7, 16),
                    UserId= 1,
                    Destination = new AddressDetails() {
                      Country= "GR",
                      PostCode= "57V2+94",
                      Addres1= "Petrilia",
                      Addres2= "Πετρίλια 350",
                      Description= ""
                    },
                    Source = new AddressDetails() {
                      Country= "MD",
                      PostCode= "1239F",
                      Addres1= "Bălți",
                      Addres2= "str-la Heciului 32",
                      Description= "Magazin APINORD"
                    }
                }
            };
        }
    }
}