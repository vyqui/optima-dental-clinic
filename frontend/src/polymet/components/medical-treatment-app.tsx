import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  UserIcon,
  CalendarIcon,
  FileTextIcon,
  PlusIcon,
  SaveIcon,
  PrinterIcon,
  ClockIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  EditIcon,
  TrashIcon,
  SearchIcon,
  FilterIcon,
  MoreVerticalIcon,
} from "lucide-react";

interface TreatmentItem {
  id: string;
  procedure: string;
  tooth: string;
  priority: "urgent" | "high" | "medium" | "low";
  status: "planned" | "in-progress" | "completed" | "cancelled";
  estimatedDuration: string;
  cost: number;
  notes: string;
  scheduledDate?: string;
}

interface Patient {
  id: string;
  name: string;
  age: number;
  phone: string;
  lastVisit: string;
  medicalHistory: string[];
}

const mockPatient: Patient = {
  id: "P001",
  name: "Maria Popescu",
  age: 34,
  phone: "0721 234 567",
  lastVisit: "15 Nov 2024",
  medicalHistory: ["Diabet tip 2", "Hipertensiune", "Alergie la penicilină"],
};

const mockTreatments: TreatmentItem[] = [
  {
    id: "T001",
    procedure: "Tratament de canal",
    tooth: "16",
    priority: "urgent",
    status: "planned",
    estimatedDuration: "90 min",
    cost: 450,
    notes: "Durere acută, necesită tratament urgent",
    scheduledDate: "2024-11-20",
  },
  {
    id: "T002",
    procedure: "Plombă compozit",
    tooth: "26",
    priority: "high",
    status: "planned",
    estimatedDuration: "45 min",
    cost: 180,
    notes: "Carie medie, fără simptome",
  },
  {
    id: "T003",
    procedure: "Detartraj profesional",
    tooth: "Toate",
    priority: "medium",
    status: "completed",
    estimatedDuration: "60 min",
    cost: 120,
    notes: "Igienă orală completă",
    scheduledDate: "2024-11-15",
  },
  {
    id: "T004",
    procedure: "Coroană ceramică",
    tooth: "11",
    priority: "medium",
    status: "in-progress",
    estimatedDuration: "120 min",
    cost: 650,
    notes: "Preparare finalizată, așteptăm coroana din laborator",
  },
];

const priorityColors = {
  urgent: "bg-red-100 text-red-800 border-red-200",
  high: "bg-orange-100 text-orange-800 border-orange-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  low: "bg-green-100 text-green-800 border-green-200",
};

const statusColors = {
  planned: "bg-blue-100 text-blue-800 border-blue-200",
  "in-progress": "bg-purple-100 text-purple-800 border-purple-200",
  completed: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-gray-100 text-gray-800 border-gray-200",
};

const statusIcons = {
  planned: <ClockIcon className="h-4 w-4" />,

  "in-progress": <AlertCircleIcon className="h-4 w-4" />,

  completed: <CheckCircleIcon className="h-4 w-4" />,

  cancelled: <XCircleIcon className="h-4 w-4" />,
};

export const MedicalTreatmentApp: React.FC = () => {
  const [treatments, setTreatments] = useState<TreatmentItem[]>(mockTreatments);
  const [selectedTreatment, setSelectedTreatment] =
    useState<TreatmentItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredTreatments = treatments.filter((treatment) => {
    const matchesSearch =
      treatment.procedure.toLowerCase().includes(searchTerm.toLowerCase()) ||
      treatment.tooth.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || treatment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalCost = treatments
    .filter((t) => t.status !== "cancelled")
    .reduce((sum, t) => sum + t.cost, 0);

  const completedTreatments = treatments.filter(
    (t) => t.status === "completed"
  ).length;
  const pendingTreatments = treatments.filter(
    (t) => t.status === "planned" || t.status === "in-progress"
  ).length;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Plan de Tratament
            </h1>
            <p className="text-gray-600">
              Gestionarea tratamentelor pentru pacient
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <PrinterIcon className="h-4 w-4 mr-2" />
              Printează
            </Button>
            <Button variant="outline" size="sm">
              <SaveIcon className="h-4 w-4 mr-2" />
              Salvează
            </Button>
            <Button
              onClick={() => setIsAddingNew(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Adaugă Tratament
            </Button>
          </div>
        </div>

        {/* Patient Info Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {mockPatient.name}
                  </h3>
                  <p className="text-sm text-gray-600">ID: {mockPatient.id}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Vârstă</p>
                <p className="font-semibold">{mockPatient.age} ani</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Telefon</p>
                <p className="font-semibold">{mockPatient.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Ultima vizită</p>
                <p className="font-semibold">{mockPatient.lastVisit}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-600 mb-2">Istoric medical:</p>
              <div className="flex flex-wrap gap-2">
                {mockPatient.medicalHistory.map((condition, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {condition}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Tratamente</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {treatments.length}
                  </p>
                </div>
                <FileTextIcon className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Finalizate</p>
                  <p className="text-2xl font-bold text-green-600">
                    {completedTreatments}
                  </p>
                </div>
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">În așteptare</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {pendingTreatments}
                  </p>
                </div>
                <ClockIcon className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Cost Total</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalCost} RON
                  </p>
                </div>
                <div className="text-2xl">💰</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

          <Input
            placeholder="Caută tratamente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <FilterIcon className="h-4 w-4 text-gray-400" />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Toate statusurile</option>
            <option value="planned">Planificat</option>
            <option value="in-progress">În progres</option>
            <option value="completed">Finalizat</option>
            <option value="cancelled">Anulat</option>
          </select>
        </div>
      </div>

      {/* Treatments Table */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Lista Tratamentelor</h3>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Procedură
                  </th>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Dinte
                  </th>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Prioritate
                  </th>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Status
                  </th>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Durată
                  </th>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Cost
                  </th>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Data programată
                  </th>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Acțiuni
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTreatments.map((treatment) => (
                  <tr key={treatment.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {treatment.procedure}
                        </p>
                        {treatment.notes && (
                          <p className="text-sm text-gray-600 mt-1">
                            {treatment.notes}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className="font-mono">
                        {treatment.tooth}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={priorityColors[treatment.priority]}>
                        {treatment.priority === "urgent" && "Urgent"}
                        {treatment.priority === "high" && "Ridicată"}
                        {treatment.priority === "medium" && "Medie"}
                        {treatment.priority === "low" && "Scăzută"}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={`${statusColors[treatment.status]} flex items-center gap-1 w-fit`}
                      >
                        {statusIcons[treatment.status]}
                        {treatment.status === "planned" && "Planificat"}
                        {treatment.status === "in-progress" && "În progres"}
                        {treatment.status === "completed" && "Finalizat"}
                        {treatment.status === "cancelled" && "Anulat"}
                      </Badge>
                    </td>
                    <td className="p-4 text-gray-700">
                      {treatment.estimatedDuration}
                    </td>
                    <td className="p-4 font-semibold text-gray-900">
                      {treatment.cost} RON
                    </td>
                    <td className="p-4">
                      {treatment.scheduledDate ? (
                        <div className="flex items-center gap-2 text-gray-700">
                          <CalendarIcon className="h-4 w-4" />

                          {new Date(treatment.scheduledDate).toLocaleDateString(
                            "ro-RO"
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">Neprogramat</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedTreatment(treatment)}
                        >
                          <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <TrashIcon className="h-4 w-4 text-red-600" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Treatment Details Modal/Panel */}
      {selectedTreatment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Detalii Tratament</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTreatment(null)}
                >
                  <XCircleIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Procedură
                  </label>
                  <Input value={selectedTreatment.procedure} className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Dinte
                  </label>
                  <Input value={selectedTreatment.tooth} className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Prioritate
                  </label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                    <option value="urgent">Urgent</option>
                    <option value="high">Ridicată</option>
                    <option value="medium">Medie</option>
                    <option value="low">Scăzută</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                    <option value="planned">Planificat</option>
                    <option value="in-progress">În progres</option>
                    <option value="completed">Finalizat</option>
                    <option value="cancelled">Anulat</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Durată estimată
                  </label>
                  <Input
                    value={selectedTreatment.estimatedDuration}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Cost (RON)
                  </label>
                  <Input
                    type="number"
                    value={selectedTreatment.cost}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Data programată
                </label>
                <Input
                  type="date"
                  value={selectedTreatment.scheduledDate || ""}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Observații
                </label>
                <Textarea
                  value={selectedTreatment.notes}
                  className="mt-1"
                  rows={3}
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedTreatment(null)}
                >
                  Anulează
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Salvează modificările
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
