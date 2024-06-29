import React, { useState } from 'react';
import { Typography, Container, Box, Card, CardContent, Grid } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ProductIcon from '@mui/icons-material/LocalOffer';
import SalesIcon from '@mui/icons-material/ShoppingCart';
import LineSalesIcon from '@mui/icons-material/ListAlt';
import EventIcon from '@mui/icons-material/Event';
import './HomeComponent.css'; // Assurez-vous de créer ce fichier CSS

const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4000 },
    { name: 'May', sales: 3000 },
    { name: 'Jun', sales: 2000 },
    { name: 'Jul', sales: 4000 },
    { name: 'Aug', sales: 3000 },
    { name: 'Sep', sales: 5000 },
    { name: 'Oct', sales: 4000 },
    { name: 'Nov', sales: 3000 },
    { name: 'Dec', sales: 2000 }
];

const HomeComponent = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (date) => {
        setDate(date);
    };

    return (
        <Container>
            <Box mt={3} textAlign="center">
                <Typography variant="h4" gutterBottom style={{ color: 'rgb(25 118 210)' }}>
                    Bienvenue sur le site de gestion des ventes et facturation
                </Typography>
                <Typography variant="body1" paragraph style={{ color: '#ff69b4', fontSize: '14px' }}>
                    Ce projet vous permet de gérer efficacement vos clients, ventes, factures, lignes de vente et produits.
                </Typography>
                <Typography variant="body1" paragraph style={{ color: '#ff69b4', fontSize: '14px' }}>
                    Utilisez le menu de navigation pour accéder aux différentes sections de l'application et commencer à gérer vos données.
                </Typography>
            </Box>

            <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#ffb6c1' }}>
                        <CardContent style={{ textAlign: 'center', padding: '10px' }}>
                            <PeopleIcon style={{ fontSize: 35, color: 'rgb(25 118 210)' }} />
                            <Typography variant="h6" component="div" style={{ color: 'rgb(25 118 210)', marginTop: '5px' }}>
                                Gestion des Clients
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: '12px' }}>
                                Ajoutez, modifiez et gérez vos clients.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#ffb6c1' }}>
                        <CardContent style={{ textAlign: 'center', padding: '10px' }}>
                            <ReceiptIcon style={{ fontSize: 35, color: 'rgb(25 118 210)' }} />
                            <Typography variant="h6" component="div" style={{ color: 'rgb(25 118 210)', marginTop: '5px' }}>
                                Gestion des Factures
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: '12px' }}>
                                Suivez et gérez les factures de vos ventes.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#ffb6c1' }}>
                        <CardContent style={{ textAlign: 'center', padding: '10px' }}>
                            <ProductIcon style={{ fontSize: 35, color: 'rgb(25 118 210)' }} />
                            <Typography variant="h6" component="div" style={{ color: 'rgb(25 118 210)', marginTop: '5px' }}>
                                Gestion des Produits
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: '12px' }}>
                                Gérez votre catalogue de produits.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#ffb6c1' }}>
                        <CardContent style={{ textAlign: 'center', padding: '10px' }}>
                            <SalesIcon style={{ fontSize: 35, color: 'rgb(25 118 210)' }} />
                            <Typography variant="h6" component="div" style={{ color: 'rgb(25 118 210)', marginTop: '5px' }}>
                                Gestion des Ventes
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: '12px' }}>
                                Suivez et gérez les ventes de vos produits.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#ffb6c1' }}>
                        <CardContent style={{ textAlign: 'center', padding: '10px' }}>
                            <LineSalesIcon style={{ fontSize: 35, color: 'rgb(25 118 210)' }} />
                            <Typography variant="h6" component="div" style={{ color: 'rgb(25 118 210)', marginTop: '5px' }}>
                                Gestion des Lignes de Vente
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: '12px' }}>
                                Gérez les détails des lignes de vente.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" style={{ backgroundColor: '#ffb6c1' }}>
                        <CardContent style={{ textAlign: 'center', padding: '10px' }}>
                            <EventIcon style={{ fontSize: 35, color: 'rgb(25 118 210)' }} />
                            <Typography variant="h6" component="div" style={{ color: 'rgb(25 118 210)', marginTop: '5px' }}>
                                Calendrier
                            </Typography>
                            <Box mt={2}>
                                <Calendar
                                    onChange={handleDateChange}
                                    value={date}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card className="card" style={{ backgroundColor: '#ffb6c1' }}>
                        <CardContent>
                            <Typography variant="h6" component="div" style={{ color: 'rgb(25 118 210)', textAlign: 'center', marginBottom: '10px' }}>
                                Graphique des Ventes
                            </Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart
                                    data={salesData}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="sales" stroke="rgb(25 118 210)" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeComponent;
