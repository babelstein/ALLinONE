namespace server
{
    using System;
    using System.Text.Json.Serialization;

    public partial class Freight
    {
        public long Id { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public FreightType Type { get; set; }
        public DateTime ValidTo { get; set; }
        public long UserId { get; set; }
        public AddressDetails Destination { get; set; }
        public AddressDetails Source { get; set; }
    }

    public partial class AddressDetails
    {
        public string Country { get; set; }
        public string PostCode { get; set; }
        public string Addres1 { get; set; }
        public string Addres2 { get; set; }
        public string Description { get; set; }
    }

    public enum FreightType
    {
        Curtainsider,
        Cooler,
        Isotherm,
        WalkingFloor,
        DumpTruck
    }
}
